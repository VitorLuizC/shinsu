import { useCanvasContext } from 'lib/canvas';
import { useCycle } from 'lib/cycle';
import type Render from './Render';

function useRender(render: Render) {
  const context = useCanvasContext();
  const { runInCycle } = useCycle();

  runInCycle((time) => render(context, time));
}

export default useRender;
