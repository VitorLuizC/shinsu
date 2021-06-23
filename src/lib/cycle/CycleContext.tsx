import { createContext } from 'react';
import type CycleOperation from './CycleOperation';

export type CycleContextValue = {
  runCycle: (time: number) => void;
  runInCycle: (operation: CycleOperation) => void;
};

const CycleContext = createContext<CycleContextValue>({
  runCycle() {
    // Does nothing, because operations are already run in 'runInCycle'.
  },

  runInCycle(operation) {
    operation(window.performance.now());
  },
});

export default CycleContext;
