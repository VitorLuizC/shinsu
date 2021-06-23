import { useContext, useLayoutEffect } from 'react'
import { useSingleton } from 'lib/function';
import AnimationContext from './AnimationContext'

function useAnimationEffect(operation: FrameRequestCallback): void {
  const context = useContext(AnimationContext);

  // Single instance function (singleton) that runs the most up-to-date effect.
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
