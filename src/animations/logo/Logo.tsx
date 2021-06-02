import { Suspense } from 'react';
import Animation from './Animation';

function Logo(): JSX.Element | null {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Animation />
    </Suspense>
  );
}

export default Logo;
