import { createContext } from 'react';
import type { CycleOperation } from './CycleOperation';

export type CycleContextValue = Set<CycleOperation>;

const CycleContext = createContext<CycleContextValue>(new Set());

export default CycleContext;
