import { useCallback, useContext, useLayoutEffect, useRef } from 'react'
import AnimationContext from './AnimationContext'

function useAnimationEffect(operation: FrameRequestCallback) {
  const context = useContext(AnimationContext);

  const operationRef = useRef(operation);

  operationRef.current = operation;

  const execute = useCallback<FrameRequestCallback>(
    (time) => operationRef.current(time),
    [],
  );

  useLayoutEffect(
    () => () => void context?.operations.delete(execute),
    [context?.operations, execute],
  );

  // To make it work without 'Animation' it runs without a cycle.
  if (!context) {
    operation(window.performance.now());
    return;
  }

  context.operations.add(execute);
}

export default useAnimationEffect;
