import { Rotate, Translate } from 'lib/transform';
import { Circle } from 'lib/shape';
import Earth from './Earth';
import Sun from './Sun';
import Moon from './Moon';
import useAnimation from 'lib/animation/useAnimation';

function SolarSystem(): JSX.Element {
  useAnimation({ framesPerSecond: 0 });

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
