import { Suspense, useState } from 'react';
import { LazyImage } from 'lib/image';
import { Translate } from 'lib/transform';
import { useAnimationFrame } from 'lib/animation';
import { Canvas } from 'lib/canvas';

function Earth() {
  const date = new Date();
  const rotate = (
    ((2 * Math.PI) / 60) * date.getSeconds() +
    ((2 * Math.PI) / 60000) * date.getMilliseconds()
  );

  return (
    <LazyImage
      uri="https://mdn.mozillademos.org/files/1429/Canvas_earth.png"
      rotate={rotate}
      positionX={-12}
      positionY={-12}
    />
  );
}

function Sun() {
  return (
    <LazyImage
      uri="https://mdn.mozillademos.org/files/1456/Canvas_sun.png"
      width={300}
      height={300}
    />
  );
}

function Moon() {
  const date = new Date();
  const rotate = (
    ((2 * Math.PI) / 6) * date.getSeconds() +
    ((2 * Math.PI) / 6000) * date.getMilliseconds()
  );

  return (
    <LazyImage
      uri="https://mdn.mozillademos.org/files/1443/Canvas_moon.png"
      rotate={rotate}
      positionX={-3.5}
      positionY={-3.5}
      translateY={28.5}
    />
  );
}

function Animation() {
  const [, setState] = useState(() => ({
    time: window.performance.now(),
    frames: 0,
  }));

  useAnimationFrame((time) => {
    setState((state) => ({
      time,
      frames: Math.round(1000 / (time - state.time)),
    }));
  });

  return (
    <Canvas width={300} height={300}>
      <Suspense fallback={<p>Carregando...</p>}>
        <Translate center>
          <Sun />
          <Translate x={105}>
            <Earth />
            <Moon />
          </Translate>
        </Translate>
      </Suspense>
    </Canvas>  
  );
}

export default Animation;
