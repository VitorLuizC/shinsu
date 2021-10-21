import { useCanvasContext } from 'lib/canvas';
import { useCycle } from 'lib/cycle';
import { useState } from 'react';
import useAnimationFrame from './useAnimationFrame';

type Options = {
  framesPerSecond: number;
};

type AnimationFrame = {
  time: number;
  framesPerSecond: number;
};

function useAnimation(options: Options): AnimationFrame {
  const { framesPerSecond } = options;
  const { runCycle } = useCycle();
  const context = useCanvasContext();

  const [state, setState] = useState<AnimationFrame>(() => ({
    time: window.performance.now(),
    framesPerSecond: 0,
  }));

  useAnimationFrame((time) => {
    const currentFramesPerSecond = 1000 / (time - state.time)

    if (framesPerSecond !== undefined && framesPerSecond < currentFramesPerSecond)
      return;

    setState({
      time,
      framesPerSecond: currentFramesPerSecond,
    });

    if (process.env.NODE_ENV !== 'production') {
      console.clear();
    }

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    runCycle(time);
  });

  return state;
}

export default useAnimation;