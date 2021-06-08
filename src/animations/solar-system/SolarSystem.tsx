import { Rotate, Translate } from 'lib/transform';
import { Circle } from 'lib/shape';
import { useRender } from 'lib/renderer';
import Earth from './Earth';
import Sun from './Sun';
import Moon from './Moon';

function SolarSystem(): JSX.Element {
  useRender((context) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  });

  const date = new Date();

  const rotation = (
    ((2 * Math.PI) / 60) * date.getSeconds() +
    ((2 * Math.PI) / 60000) * date.getMilliseconds()
  );

  return (
    <>
      <Sun />
      <Translate center>
        <Circle size={210} strokeColor="rgba(0, 153, 255, 0.4)" />
        <Rotate rotation={rotation}>
          <Translate x={105}>
            <Earth />
            <Moon />
          </Translate>
        </Rotate>
      </Translate>
    </>
  );
}

export default SolarSystem;
