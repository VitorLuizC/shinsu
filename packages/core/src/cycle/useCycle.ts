import { useContext } from 'react';
import CycleContext, { CycleContextValue } from './CycleContext';

function useCycle(): CycleContextValue {
  return useContext(CycleContext);
}

export default useCycle;
