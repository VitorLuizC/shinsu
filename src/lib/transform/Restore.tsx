import { useAnimationEffect } from 'lib/animation';
import { useCanvasContext } from 'lib/canvas';

function Restore(): null {
  const context = useCanvasContext();

  useAnimationEffect(() => context.restore());

  return null;
}

export default Restore;
