import './context';
import { Suspense } from 'react';
import { Canvas } from 'lib/canvas';
import Animation from './Animation';

function App() {
  return (
    <Canvas width={300} height={300}>
      <Suspense fallback={<p>Carregando...</p>}>
        <Animation />
      </Suspense>
    </Canvas>
  );
}

export default App;
