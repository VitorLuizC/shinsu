import { useState } from 'react';
import LOGO_URL from './logo.svg';
import { LazyImage } from 'lib/image';
import { useAnimationFrame } from 'lib/animation';
import { Canvas } from 'lib/canvas';

function Animation(): JSX.Element | null {
  const [, setAngle] = useState(0);

  useAnimationFrame(() => setAngle((angle) => angle + 0.001));

  return (
    <Canvas width={841.9} height={595.3}>
      <LazyImage uri={LOGO_URL} width={841.9} height={595.3} position={[0, 0]} />
    </Canvas>
  );
}

export default Animation;
