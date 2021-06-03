import { useContext, useLayoutEffect, useRef } from 'react'
import AnimationContext from './AnimationContext'

function useAnimationEffect(effect: (time: number) => void) {
  const effectRef = useRef(effect);

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
