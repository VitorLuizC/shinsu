import { useState } from 'react';
import LazyImage from './lib/LazyImage/LazyImage';
import useAnimationFrame from './hooks/useAnimationFrame';
import Translate from './lib/Translate';

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
      position={[-12, -12]}
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
      translate={[0, 28.5]}
      position={[-3.5, -3.5]}
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
    <Translate center>
      <Sun />
      <Translate x={105}>
        <Earth />
        <Moon />
      </Translate>
    </Translate>
  );
}

export default Animation;
