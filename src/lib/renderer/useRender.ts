import { useAnimationEffect } from 'lib/animation';
import { useCanvasContext } from 'lib/canvas';
import type Render from './Render';

function useRender(render: Render) {
  const context = useCanvasContext();

  useAnimationEffect((time) => render(context, time));
}

export default useRender;
