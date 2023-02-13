import { Suspense, useState } from 'react';
import {
  Animation,
  Rotate,
  Radian,
  LazyImage,
  useRenderInCycle,
} from '@shinsu/core';
import LOGO_URL from './logo.svg';

function Logo() {
  const [state, setState] = useState(() => ({
    rotation: 0,
    clockwise: true,
  }));

  useRenderInCycle(() => {
    setState((state) => ({
      clockwise:
        state.rotation > Radian.fromDegree(360)
          ? false
          : state.rotation < 0
          ? true
          : state.clockwise,
      rotation: state.clockwise
        ? state.rotation + Radian.DEGREE
        : state.rotation - Radian.DEGREE,
    }));
  });

  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Rotate rotation={state.rotation}>
        <LazyImage uri={LOGO_URL} width={841.9} height={595.3} />
      </Rotate>
    </Suspense>
  );
}

function App(): JSX.Element {
  return (
    <Animation width={841.9} height={595.3}>
      <Logo />
    </Animation>
  );
}

export default App;
