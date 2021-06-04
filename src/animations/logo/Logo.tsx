import 'context';

import { Suspense, useState } from 'react';
import { LazyImage } from 'lib/image';

import { Canvas, useCanvasContext } from 'lib/canvas';
import LOGO_URL from './logo.svg';
import { Rotate } from 'lib/transform';
import { Animation, useAnimationEffect } from 'lib/animation';

function Logo(): JSX.Element | null {
  const context = useCanvasContext();
  
  const [rotation, setRotation] = useState(0);

  useAnimationEffect(() => {
    setRotation((rotation) => rotation + 0.5);

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
