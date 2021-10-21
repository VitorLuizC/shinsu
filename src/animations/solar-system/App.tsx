import { Suspense } from 'react';
import SolarSystem from './SolarSystem';
import { Cycle } from 'lib/cycle';
import { Canvas } from 'lib/canvas';

function App(): JSX.Element {
  return (
    <Canvas width={300} height={300}>
      <Cycle>
        <Suspense fallback={<p>Carregando...</p>}>
          <SolarSystem />
        </Suspense>
      </Cycle>
    </Canvas>
  );
}
export default App;
