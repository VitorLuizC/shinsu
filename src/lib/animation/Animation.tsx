import { ReactNode, useMemo, useRef, useState } from 'react';
import AnimationContext from './AnimationContext';
import useAnimationFrame from './useAnimationFrame';

type Props = {
  children?: ReactNode;
};

function Animation(props: Props) {
  const { children } = props;

  const [time, setTime] = useState(() => window.performance.now());

  const operationsRef = useRef<Set<FrameRequestCallback>>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const operations = operationsRef.current ?? (operationsRef.current = new Set());

  useAnimationFrame((time) => {
    setTime(time);
    console.clear();
    operations.forEach((operation) => operation(time));
    operations.clear();
  });

  const value = useMemo(() => ({ time, operations }), [time, operations]);

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}

export default Animation;