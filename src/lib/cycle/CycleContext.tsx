import { createContext } from 'react';
import type CycleOperation from './CycleOperation';

// TODO: Look for better method names.
export type CycleContextValue = {
  runCycle: (time: number) => void;
  runInCycle: (operation: CycleOperation) => void;
  removeFromCycle: (operation: CycleOperation) => void;
};

const CycleContext = createContext<CycleContextValue>({
  runCycle() {
    // Does nothing, because operations runs in 'runInCycle'.
  },

  runInCycle(operation) {
    operation(window.performance.now());
  },

  removeFromCycle() {
    // Does nothing, because operations weren't persisted.
  }
});

export default CycleContext;
