import { useCanvasContext } from 'lib/canvas';

function Restore(): null {
  const context = useCanvasContext();

  context.restore();

  return null;
}

export default Restore;
