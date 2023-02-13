import { Circle } from '@shinsu/core';
// import { useState } from 'react';

// enum Direction { TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT };

// type Movement = {
//   duration: number;
//   direction: Direction;
//   positionX: number;
//   positionY: number;
// };

function Ball() {
  return (
    <Circle
      size={Ball.SIZE}
      positionY={Ball.SIZE / 2}
      positionX={Ball.SIZE / 2}
      strokeColor="#000000"
      strokeWidth={1}
    />
  );
}

Ball.SIZE = 30;

export default Ball;
