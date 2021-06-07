import 'context';

import { Suspense, useState } from 'react';
import { LazyImage } from 'lib/image';

import LOGO_URL from './logo.svg';
import { Rotate } from 'lib/transform';
import { Radian } from 'lib/unit';
import { Renderer, useRender } from 'lib/renderer';

function Logo(): JSX.Element | null {
  const [{ rotation }, setRotation] = useState(() => ({
    rotation: 0,
    clockwise: true,
  }));

  useRender((context) => {
    setRotation((state) => ({
      clockwise: rotation > Radian.fromDegree(360) ? false : rotation < 0 ? true : state.clockwise,
      rotation: state.clockwise ? state.rotation + Radian.DEGREE : state.rotation - Radian.DEGREE,
    }));

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  });

  return (
    <Rotate rotation={rotation}>
      <LazyImage
        uri={LOGO_URL}
        width={841.9}
        height={595.3}
      />
    </Rotate>
  );
}


function Main(): JSX.Element | null {
  return (
    <Renderer width={841.9} height={595.3}>
      <Suspense fallback={<p>Carregando...</p>}>
        <Logo />
      </Suspense>
    </Renderer>
  );
}

export default Main;
