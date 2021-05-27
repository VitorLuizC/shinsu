import { Suspense } from 'react';
import { Canvas } from './components/Canvas';
import AsyncImage from './lib/AsyncImage';

function App() {
  return (
    <Canvas>
      <Suspense fallback={<div />}>
        <AsyncImage uri="https://mdn.mozillademos.org/files/1456/Canvas_sun.png" />
        <AsyncImage uri="https://mdn.mozillademos.org/files/1443/Canvas_moon.png" />
        <AsyncImage uri="https://mdn.mozillademos.org/files/1429/Canvas_earth.png" />
      </Suspense>
    </Canvas>
  );
}

export default App
