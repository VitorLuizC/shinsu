import { useContext } from 'react';
import CycleContext, { type CycleContextValue } from './CycleContext';

function useCycle(): CycleContextValue {
  return useContext(CycleContext);
}

export default useCycle;
