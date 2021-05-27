import { useEffect, useRef } from 'react';

function useAnimationFrame(callback: FrameRequestCallback) {
  const callbackRef = useRef(callback);

  if (callbackRef.current !== callback) {
    callbackRef.current = callback;
  }
  
  useEffect(() => {
    let handle: number;

    const run = (time: number) => {
      handle = window.requestAnimationFrame(run);
      callbackRef.current(time);
    };

    run(window.performance.now());

    return () => window.cancelAnimationFrame(handle);
  }, []);
}

export default useAnimationFrame;
