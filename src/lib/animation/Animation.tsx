import { ReactNode, useRef } from 'react';
import AnimationContext from './AnimationContext';
import type AnimationEffectRef from './AnimationEffectRef';
import useAnimationFrame from './useAnimationFrame';

type Props = {
  children?: ReactNode;
};

function Animation(props: Props) {
  const { children } = props;

  const effectsRef = useRef<null | Set<AnimationEffectRef>>(null);

  const effects = effectsRef.current ?? (effectsRef.current = new Set());

  useAnimationFrame((time) => {
    effects.forEach((effectRef) => {
      effectRef.current?.(time);
    });
  });

  return (
    <AnimationContext.Provider value={{ time: 0, effects }}>
      {children}
    </AnimationContext.Provider>
  );
}

export default Animation;