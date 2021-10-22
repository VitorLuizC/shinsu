import { Suspense } from 'react';
import { Rotate, Translate } from 'lib/transform';
import { Circle } from 'lib/shape';
import Earth from './Earth';
import Moon from './Moon';
import Sun from './Sun';
import Animation from 'lib/animation/Animation';

function getRotation(time: number): number {
  const date = new Date(time);

  return (
    ((2 * Math.PI) / 60) * date.getSeconds() +
    ((2 * Math.PI) / 60000) * date.getMilliseconds()
  );
}

function App(): JSX.Element {
  return (
    <Animation width={300} height={300} framesPerSecond={120}>
      {({ time, framesPerSecond }) => (
        <Suspense fallback={<p>Carregando...</p>}>
          <p style={{ position: 'fixed' }}>{framesPerSecond.toFixed(2)}</p>
          <Sun />
          <Translate center>
            <Circle size={210} strokeColor="rgba(0, 153, 255, 0.4)" />
            <Rotate rotation={getRotation(time)}>
              <Translate x={105}>
                <Earth />
                <Moon />
              </Translate>
            </Rotate>
          </Translate>
        </Suspense>
      )}
    </Animation>
  );
}

export default App;
