import { Suspense } from 'react';
import { Renderer } from 'lib/renderer';
import Logo from './Logo';

function App(): JSX.Element {
  return (
    <Renderer width={841.9} height={595.3}>
      <Suspense fallback={<p>Carregando...</p>}>
        <Logo />
      </Suspense>
    </Renderer>
  );
}

export default App;
