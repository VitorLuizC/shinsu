import { useAnimationEffect } from 'lib/animation';
import { useCanvasContext } from 'lib/canvas';
import { memo } from 'react';

function Restore(): null {
  const context = useCanvasContext();

  useAnimationEffect(() => context.restore());

  return null;
}

export default memo(Restore);
