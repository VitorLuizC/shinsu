import { Suspense, useState } from 'react';
import { Animation } from 'lib/animation';
import { Rotate } from 'lib/transform';
import { Radian } from 'lib/unit';
import { LazyImage } from 'lib/image';
import LOGO_URL from './logo.svg';
import { useRenderInCycle } from 'lib/render';

function Logo() {
  const [state, setState] = useState(() => ({
    rotation: 0,
    clockwise: true,
  }));

  useRenderInCycle(() => {
    setState((state) => ({
      clockwise: (
        state.rotation > Radian.fromDegree(360)
          ? false
          : state.rotation < 0
            ? true
            : state.clockwise
      ),
      rotation: (
        state.clockwise
          ? state.rotation + Radian.DEGREE
          : state.rotation - Radian.DEGREE
      ),
    }));
  });

  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Rotate rotation={state.rotation}>
        <LazyImage
          uri={LOGO_URL}
          width={841.9}
          height={595.3}
        />
      </Rotate>
    </Suspense>
  );
}


function App(): JSX.Element {
  return (
    <Animation width={841.9} height={595.3}>
      {() => <Logo />}
    </Animation>
  );
}

export default App;
