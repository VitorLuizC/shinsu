import { Suspense } from 'react';
import { Renderer } from 'lib/renderer';
import SolarSystem from './SolarSystem';

function App(): JSX.Element {
  return (
    <Renderer width={300} height={300}>
      <Suspense fallback={<p>Carregando...</p>}>
        <SolarSystem />
      </Suspense>
    </Renderer>
  );
}
export default App;
