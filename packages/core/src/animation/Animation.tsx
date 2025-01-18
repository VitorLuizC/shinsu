import { type ComponentProps, type ReactElement, type ReactNode, useRef } from 'react';
import { Canvas } from '../canvas';
import { Cycle, type CycleContextValue } from '../cycle';
import useAnimationFrame from './useAnimationFrame';

type CanvasProps = Omit<ComponentProps<typeof Canvas>, 'children'>;

type AnimationFrame = {
  time: number;
  framesPerSecond: number;
};

type Props = CanvasProps & {
  children: ReactNode;
  framesPerSecond?: number;
};

function Animation(props: Props): ReactElement {
  const { children, framesPerSecond, ...canvasProps } = props;

  const cycleRef = useRef<null | CycleContextValue>(null);
  const contextRef = useRef<null | CanvasRenderingContext2D>(null);

  const frameRef = useRef<AnimationFrame | null>(null);

  frameRef.current ??= {
    time: window.performance.now(),
    framesPerSecond: 0,
  };

  useAnimationFrame((time) => {
    const currentFramesPerSecond =
      1000 / (time - (frameRef.current?.time ?? 0));

    // It's not first frame and there's an expected 'framePerSecond' that is below current FPS.
    if (
      frameRef.current?.framesPerSecond !== 0 &&
      framesPerSecond !== undefined &&
      framesPerSecond < currentFramesPerSecond
    )
      return;

    frameRef.current = {
      time,
      framesPerSecond: currentFramesPerSecond,
    };

    // if (process.env.NODE_ENV !== 'production') {
    //   console.clear();
    // }

    contextRef.current?.clearRect(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height,
    );

    cycleRef.current?.forEach((operation) => operation(time));
    cycleRef.current?.clear();
  });

  return (
    <Canvas {...canvasProps} ref={contextRef}>
      <Cycle ref={cycleRef}>{children}</Cycle>
    </Canvas>
  );
}

export default Animation;
