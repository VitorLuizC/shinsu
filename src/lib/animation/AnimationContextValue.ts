import type AnimationEffectRef from './AnimationEffectRef';

type AnimationContextValue = {
  time: number;
  effects: Set<AnimationEffectRef>;
};

export default AnimationContextValue;
