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

    const value = useMemo(() => new Set<CycleOperation>(), []);

    useImperativeHandle(ref, () => value, [value]);

    return (
      <CycleContext.Provider value={value}>{children}</CycleContext.Provider>
    );
  },
);

export default Cycle;
