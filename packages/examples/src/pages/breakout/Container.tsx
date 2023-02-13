import { useCanvasContext } from '@shinsu/core';
import { Fragment, useMemo } from 'react';
import Ball from './Ball';
import Paddle from './Paddle';
import type Bounds from './types/Bounds';

function Container() {
  const context = useCanvasContext();

  const bounds = useMemo<Bounds>(
    () => ({
      top: context.canvas.height - Container.MARGIN - Paddle.HEIGHT,
      left: Container.MARGIN,
      right: context.canvas.width - Container.MARGIN,
      bottom: context.canvas.height - Container.MARGIN,
    }),
    [context],
  );

  return (
    <Fragment>
      <Ball />
      <Paddle bounds={bounds} />
    </Fragment>
  );
}

Container.MARGIN = 10;

export default Container;
