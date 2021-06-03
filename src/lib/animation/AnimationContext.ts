import { createContext } from 'react';
import type AnimationContextValue from './AnimationContextValue';

const AnimationContext = createContext<null | AnimationContextValue>(null);

export default AnimationContext;
