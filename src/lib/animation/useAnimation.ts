import { useContext, useLayoutEffect, useRef } from 'react'
import AnimationContext from './AnimationContext'

function useAnimationEffect(effect: (time: number) => void) {
  const effectRef = useRef<null | ((time: number) => void)>(null);

  if (effectRef.current !== effect)
    effectRef.current = effect;
  
  const context = useContext(AnimationContext);

  useLayoutEffect(() => {
    context?.effects.add(effectRef);

    return () => {
      context?.effects.delete(effectRef);
    };
  }, [context?.effects]);
}

export default useAnimationEffect;
