import { useLayoutEffect, useState } from 'react';
import { useCanvasContext } from './components/Canvas';
import LazyImage from './lib/LazyImage/LazyImage';
import useAnimationFrame from './hooks/useAnimationFrame';

function Earth() {
  const date = new Date();
  const rotate =
    ((2 * Math.PI) / 60) * date.getSeconds() +
    ((2 * Math.PI) / 60000) * date.getMilliseconds();

  return (
    <LazyImage
      uri="https://mdn.mozillademos.org/files/1429/Canvas_earth.png"
      rotate={rotate}
      position={[-12, -12]}
      translate={[105, 0]}
    />
  );
}

function Sun() {
  return (
    <LazyImage
      uri="https://mdn.mozillademos.org/files/1456/Canvas_sun.png"
      width={300}
      height={300}
      translate={[150, 150]}
    />
  );
}

function Moon() {
  const context = useCanvasContext();
  const date = new Date();
  const rotate =
    ((2 * Math.PI) / 6) * date.getSeconds() +
    ((2 * Math.PI) / 6000) * date.getMilliseconds();

  useLayoutEffect(() => {
    context.save();
    context.translate(105, 0);
    context.fillRect(0, -12, 40, 24); // Shadow
    context.restore();
  });

  return (
    <LazyImage
      uri="https://mdn.mozillademos.org/files/1443/Canvas_moon.png"
      rotate={rotate}
      translate={[105, 28.5]}
      position={[-3.5, -3.5]}
    />
  );
}

function Animation() {
  const context = useCanvasContext();
  const [{ time, frames }, setTime] = useState(() => ({
    time: window.performance.now(),
    frames: 0,
  }));

  useAnimationFrame((time) => {
    setTime((state) => ({
      time,
      frames: Math.round(1000 / (time - state.time)),
    }));
  });

  useLayoutEffect(() => {
    context.restore();
    context.save();
    context.translate(context.canvas.width / 2, context.canvas.height / 2);
  })

  return (
    <>
      <span>{frames} frames por segundo.</span>
      <Earth />
      <Moon />
      <Sun />
    </>
  );
}

export default Animation;
