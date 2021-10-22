import { ComponentProps, ReactNode, useRef, useState } from 'react';
import { Canvas } from 'lib/canvas';
import { Cycle, CycleContextValue } from 'lib/cycle';
import useAnimationFrame from './useAnimationFrame';

type CanvasProps = Omit<ComponentProps<typeof Canvas>, 'children'>;

type ChildrenProps = {
  time: number;
  framesPerSecond: number;
};

type Props = CanvasProps & {
  children: (props: ChildrenProps) => ReactNode;
  framesPerSecond?: number;
};

function Animation(props: Props): JSX.Element {
  const { children, framesPerSecond, ...canvasProps } = props;

  const cycleRef = useRef<null | CycleContextValue>(null);
  const contextRef = useRef<null | CanvasRenderingContext2D>(null);

  const [state, setState] = useState<ChildrenProps>(() => ({
    time: window.performance.now(),
    framesPerSecond: 0,
  }));

  useAnimationFrame((time) => {
    const currentFramesPerSecond = 1000 / (time - state.time)

    // It's not first frame and there's an expected 'framePerSecond' that is below current FPS.
    if (
      state.framesPerSecond !== 0 &&
      framesPerSecond !== undefined &&
      framesPerSecond < currentFramesPerSecond
    )
      return;

    setState({
      time,
      framesPerSecond: currentFramesPerSecond,
    });

    if (process.env.NODE_ENV !== 'production') {
      console.clear();
    }

    contextRef.current?.clearRect(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height,
    );

    cycleRef.current?.runCycle(time);
  });

  return (
    <Canvas {...canvasProps} ref={contextRef}>
      <Cycle ref={cycleRef}>
        {children(state)}
      </Cycle>
    </Canvas>
  );
}

export default Animation;
