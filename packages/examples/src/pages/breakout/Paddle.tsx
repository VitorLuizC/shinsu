import { useState } from 'react';
import { useRenderInCycle, Rectangle } from '@shinsu/core';
import type Bounds from './types/Bounds';
import usePressingKey from './hooks/usePressingKey';

type Props = {
  bounds: Bounds;
};

enum Direction { NONE, LEFT, RIGHT };

type State = {
  duration: number;
  direction: Direction;
  positionX: number;
};

function Paddle(props: Props): JSX.Element {
  const { bounds } = props;

  const [state, setState] = useState<State>(() => ({
    duration: 0,
    direction: Direction.NONE,
    positionX: (bounds.right - Paddle.WIDTH) / 2,
  }));

  const moveTo = (direction: Direction) => setState((state) => {
    const duration = state.direction === direction ? state.duration + 1.25 : 0;

    // Calcs next 'positionX' based on direction and movement duration.

    let positionX = state.positionX;

    if (direction === Direction.RIGHT) {
      const bound = bounds.right - Paddle.WIDTH;

      positionX = Math.floor(positionX + duration);

      if (positionX > bound)
        positionX = bound;
    }

    if (direction === Direction.LEFT) {
      positionX = Math.floor(positionX - duration);

      if (positionX < bounds.left)
        positionX = bounds.left;
    }

    return { duration, direction, positionX };
  });

  const key = usePressingKey();

  useRenderInCycle(() => {
    if (key === 'ArrowRight')
      moveTo(Direction.RIGHT);
    else if (key === 'ArrowLeft')
      moveTo(Direction.LEFT);
    else
      moveTo(Direction.NONE);
  });

  return (
    <Rectangle
      positionX={state.positionX}
      positionY={bounds.top}
      width={Paddle.WIDTH}
      height={Paddle.HEIGHT}
      strokeColor="#000000"
    />
  );
}

Paddle.WIDTH = 100;

Paddle.HEIGHT = 30;

export default Paddle;
