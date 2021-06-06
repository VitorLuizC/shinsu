import { ReactNode, useMemo, useRef, useState } from 'react';
import AnimationContext from './AnimationContext';
import useAnimationFrame from './useAnimationFrame';

type Props = {
  children?: ReactNode;
  framesPerSecond?: number;
};

function Animation(props: Props) {
  const { children, framesPerSecond } = props;

  const [state, setState] = useState(() => ({
    time: window.performance.now(),
    framesPerSecond: 0,
  }));

  const operationsRef = useRef<Set<FrameRequestCallback>>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const operations = operationsRef.current ?? (operationsRef.current = new Set());

  useAnimationFrame((currentTime) => {
    const currentFramesPerSecond = 1000 / (currentTime - state.time)

    if (framesPerSecond !== undefined && framesPerSecond < currentFramesPerSecond)
      return;

    setState({ time: currentTime, framesPerSecond: currentFramesPerSecond });
    console.clear();
    operations.forEach((operation) => operation(currentTime));
    operations.clear();
  });

  const value = useMemo(() => ({ time: state.time, operations }), [state, operations]);

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}

export default Animation;