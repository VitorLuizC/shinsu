import { useLayoutEffect } from 'react';
import { useCanvasContext } from '../components/Canvas';

function Restore(): null {
  const context = useCanvasContext();

  useLayoutEffect(() => context.restore());

  return null;
}

export default Restore;
