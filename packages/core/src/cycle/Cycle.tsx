import { forwardRef, ReactNode, useImperativeHandle, useMemo } from 'react';
import CycleContext, { CycleContextValue } from './CycleContext';
import type CycleOperation from './CycleOperation';

type Ref = CycleContextValue;

type Props = {
  children: ReactNode;
};

const Cycle = forwardRef<Ref, Props>(
  // 'function' keyword was used to prevent 'displayName' assignment.
  function Cycle(props, ref): JSX.Element {
    const { children } = props;

    const operations = useMemo(() => new Set<CycleOperation>(), []);

    const value = useMemo<CycleContextValue>(() => ({
      runCycle(time) {
        operations.forEach((operation) => operation(time));
        operations.clear();
      },
      runInCycle(operation) {
        operations.add(operation);
      },
      removeFromCycle(operation) {
        operations.delete(operation);
      },
    }), [operations]);

    useImperativeHandle(ref, () => value, [value]);

    return (
      <CycleContext.Provider value={value}>
        {children}
      </CycleContext.Provider>
    );
  },
);

export default Cycle;
