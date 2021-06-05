import 'context';

import { Suspense, useState } from 'react';
import { LazyImage } from 'lib/image';

import { Canvas, useCanvasContext } from 'lib/canvas';
import LOGO_URL from './logo.svg';
import { Rotate } from 'lib/transform';
import { Animation, useAnimationEffect } from 'lib/animation';
import { Radian } from 'lib/unit';

function Logo(): JSX.Element | null {
  const context = useCanvasContext();
  
  const [{ rotation }, setRotation] = useState(() => ({
    rotation: 0,
    clockwise: true,
  }));

  useAnimationEffect(() => {
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
    <Canvas width={841.9} height={595.3}>
      <Animation>
        <Suspense fallback={<p>Carregando...</p>}>
          <Logo />
        </Suspense>
      </Animation>
    </Canvas>
  );
}

export default Main;
