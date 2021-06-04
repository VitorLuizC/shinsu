import { Suspense } from 'react';
import { Animation, useAnimationEffect } from 'lib/animation';
import { Canvas, useCanvasContext } from 'lib/canvas';
import { Rotate, Translate } from 'lib/transform';
import Earth from './Earth';
import Sun from './Sun';
import Moon from './Moon';

function X() {
  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.globalCompositeOperation = 'destination-over';
    context.fillStyle = 'rgba(0, 0, 0, 0.4)';
    context.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  });

  const date = new Date();

  const rotation = (
    ((2 * Math.PI) / 60) * date.getSeconds() +
    ((2 * Math.PI) / 60000) * date.getMilliseconds()
  );

  return (
    <>
      <Translate center>
        <Rotate rotation={rotation}>
          <Translate x={105}>
            <Earth />
            <Moon />
          </Translate>
        </Rotate>
      </Translate>
      <Sun />
    </>
  );
}

function SolarSystem() {
  return (
    <Canvas width={300} height={300}>
      <Suspense fallback={<p>Carregando...</p>}>
        <Animation>
          <X />
        </Animation>
      </Suspense>
    </Canvas>
  );
}

export default SolarSystem;
