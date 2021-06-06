import { useContext, useLayoutEffect } from 'react'
import AnimationContext from './AnimationContext'
import useSingleton from './useSingleton';

function useAnimationEffect(operation: FrameRequestCallback) {
  const context = useContext(AnimationContext);

  const singleton = useSingleton(operation);

  useLayoutEffect(
    () => () => void context?.operations.delete(singleton),
    [context?.operations, singleton],
  );

  // To make it work without 'Animation' it runs without a cycle.
  if (!context) {
    operation(window.performance.now());
    return;
  }

  context.operations.add(singleton);
}

export default useAnimationEffect;
