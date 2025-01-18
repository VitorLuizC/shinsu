import { useCanvasContext } from '../canvas';
import { useCycle } from '../cycle';
import { useSingleton } from '../function';
import { isStrictModeDoubleInvokation } from '../life-cycle';
import { useLayoutEffect } from 'react';
import type { RenderCallback } from './RenderCallback';

function useRenderInCycle(render: RenderCallback): void {
  const context = useCanvasContext();

  const operations = useCycle();

  const operation = useSingleton(() => render(context));

  if (!isStrictModeDoubleInvokation()) operations.add(operation);

  useLayoutEffect(
    () => () => {
      operations.delete(operation);
    },
    [operation, operations],
  );
}

export default useRenderInCycle;
