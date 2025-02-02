import { forwardRef, type ReactElement, type ReactNode, useImperativeHandle, useRef } from 'react';
import CycleContext, { type CycleContextValue } from './CycleContext';
import type { CycleOperation } from './CycleOperation';

type Ref = CycleContextValue;

type Props = {
  children: ReactNode;
};

const Cycle = forwardRef<Ref, Props>(
  // 'function' keyword was used to prevent 'displayName' assignment.
  function Cycle(props, ref): ReactElement {
    const { children } = props;

    const valueRef = useRef<CycleContextValue | null>(null);

    const value = valueRef.current ??= new Set<CycleOperation>();

    useImperativeHandle(ref, () => value, [value]);

    return (
      <CycleContext.Provider value={value}>{children}</CycleContext.Provider>
    );
  },
);

export default Cycle;
