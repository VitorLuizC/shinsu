import { Suspense } from 'react';
import { Canvas } from './components/Canvas';
import LazyImage from './lib/LazyImage/LazyImage';

function App() {
  return (
    <Canvas>
      <Suspense fallback={<div />}>
        <LazyImage uri="https://mdn.mozillademos.org/files/1456/Canvas_sun.png" />
        <LazyImage uri="https://mdn.mozillademos.org/files/1443/Canvas_moon.png" />
        <LazyImage uri="https://mdn.mozillademos.org/files/1429/Canvas_earth.png" />
      </Suspense>
    </Canvas>
  );
}

export default App
