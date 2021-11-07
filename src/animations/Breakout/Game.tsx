import { useCanvasContext } from 'lib/canvas';
import { Fragment, useMemo } from 'react';
import Paddle, { Bounds } from './Paddle';

const MARGIN = 20;

function Game() {
  const context = useCanvasContext();

  const bounds = useMemo<Bounds>(() => ({
    top: context.canvas.height - MARGIN - Paddle.HEIGHT,
    left: MARGIN,
    right: context.canvas.width - MARGIN,
    bottom: context.canvas.height - MARGIN,
  }), [context]);

  return (
    <Fragment>
      <Paddle bounds={bounds} />
    </Fragment>
  );
}

export default Game;
