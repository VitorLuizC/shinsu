import { useLayoutEffect } from 'react';
import { useCanvasContext } from 'lib/canvas';

function Restore(): null {
  const context = useCanvasContext();

  useLayoutEffect(() => context.restore());

  return null;
}

export default Restore;
