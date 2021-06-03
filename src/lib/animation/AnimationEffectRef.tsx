import type { MutableRefObject } from 'react';

type AnimationEffectRef = MutableRefObject<null | ((time: number) => void)>;

export default AnimationEffectRef;
