import { useRenderInCycle, Circle } from '@shinsu/core';
import { useState } from 'react';
import type Position from './Position';
import useCursorPositions from './useCursorPositions';

function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

type Bubble = {
  id: number;
  size: number;
  color: {
    R: number;
    G: number;
    B: number;
    A: number;
  };
  position: {
    x: number;
    y: number;
  };
};

let id = 0;

function createBubble(position: Position): Bubble {
  id++;

  return {
    id,
    position: {
      x: random(position.x - 10, position.x + 10),
      y: random(position.y - 10, position.y + 10),
    },
    size: random(35, 65),
    color: {
      R: random(126, 255),
      G: 0,
      B: random(126, 255),
      A: 1
    }
  };
}

function Bubbles(): JSX.Element {
  const positions = useCursorPositions();
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useRenderInCycle(() => {
    const newBubbles = positions.flatMap<Bubble>(createBubble);

    setBubbles((bubbles) => (
      bubbles
        .map((bubble) => ({
          ...bubble,
          color: {
            ...bubble.color,
            A: bubble.color.A - 0.025,
          },
        }))
        .filter((bubble) => bubble.color.A > 0)
        .concat(newBubbles)
      ),
    );
  });

  return (
    <>
      {bubbles.map((bubble) => (
        <Circle
          key={bubble.id}
          size={bubble.size}
          positionX={bubble.position.x}
          positionY={bubble.position.y}
          fillColor={`rgba(${bubble.color.R}, ${bubble.color.G}, ${bubble.color.B}, ${bubble.color.A})`}
          strokeColor={`rgba(${bubble.color.R}, ${bubble.color.G}, ${bubble.color.B}, ${bubble.color.A})`}
        />
      ))}
    </>
  );
}

export default Bubbles;
