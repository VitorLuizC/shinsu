import { useCanvasContext } from 'lib/canvas';
import { useCycle } from 'lib/cycle';
import { useSingleton } from 'lib/function';
import { useLayoutEffect } from 'react';
import type RenderCallback from './RenderCallback';

function useRenderInCycle(render: RenderCallback): void {
  const context = useCanvasContext();

  const { runInCycle, removeFromCycle } = useCycle();

  const operation = useSingleton(() => render(context));

  runInCycle(operation);

  useLayoutEffect(
    () => () => removeFromCycle(operation),
    [operation, removeFromCycle],
  );
}

export default useRenderInCycle;
