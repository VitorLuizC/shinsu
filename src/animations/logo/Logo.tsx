import 'context';

// import { useState, Suspense } from 'react';
import { Suspense } from 'react';
import { LazyImage } from 'lib/image';
// import { useAnimationFrame } from 'lib/animation';
import { Canvas, useCanvasContext } from 'lib/canvas';
import LOGO_URL from './logo.svg';
import { Rotate } from 'lib/transform';

function Logo(): JSX.Element | null {
  const context = useCanvasContext();
  // const [rotate, setRotate] = useState(0);

  // useAnimationFrame(() => setRotate((rotate) => rotate + 0.001));

  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  return (
    <Rotate angle={0}>
      <LazyImage
        uri={LOGO_URL}
        width={841.9}
        height={595.3}
        position={[0, 0]}
        rotate={0}
      />
    </Rotate>
  );
}


function Animation(): JSX.Element | null {
  return (
    <Canvas width={841.9} height={595.3}>
      <Suspense fallback={<p>Carregando...</p>}>
        <Logo />
      </Suspense>
    </Canvas>
  );
}

export default Animation;
