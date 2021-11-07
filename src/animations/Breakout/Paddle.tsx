import { useState } from 'react';
import { useRenderInCycle } from 'lib/render';
import { Rectangle } from 'lib/shape';
import usePressingKey from './hooks/usePressingKey';

export type Bounds = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};

type Props = {
  bounds: Bounds;
};

enum Direction { NONE, LEFT, RIGHT }

type Movement = {
  position: number;
  duration: number;
  direction: Direction;
};

function Paddle(props: Props): JSX.Element {
  const { bounds } = props;

  const [movement, setMoviment] = useState<Movement>(() => ({
    position: (bounds.right - Paddle.WIDTH) / 2,
    duration: 0,
    direction: Direction.NONE,
  }));

  const updateMovement = (direction: Direction): void => {
    const duration = (
      movement.direction === direction
        ? movement.duration + 1
        : 0
    );

    // Calcs next position

    let position = movement.position;

    if (direction === Direction.RIGHT) {
      const bound = bounds.right - Paddle.WIDTH;

      position = position + duration;

      if (position > bound) {
        position = bound;
      }
    }

    if (direction === Direction.LEFT) {
      position = position - duration;

      if (position < bounds.left) {
        position = bounds.left;
      }
    }

    setMoviment({ duration, position, direction });
  };

  const key = usePressingKey();

  useRenderInCycle(() => {
    if (key === 'ArrowRight') {
      updateMovement(Direction.RIGHT);
    } else if (key === 'ArrowLeft') {
      updateMovement(Direction.LEFT);
    } else {
      updateMovement(Direction.NONE);
    }
  });

  return (
    <Rectangle
      positionX={movement.position}
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
