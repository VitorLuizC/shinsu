import { useRenderInCycle } from 'lib/render';
import { Rectangle } from 'lib/shape';
import usePressingKey from './hooks/usePressingKey';
import { MARGIN } from './Breakout';
import { Action, ActionType } from './store';
import type { Dispatch } from 'react';

type Props = {
  positionX: number;
  dispatch: Dispatch<Action>;
};

function Paddle(props: Props): JSX.Element {
  const { positionX, dispatch } = props;

  const key = usePressingKey();

  useRenderInCycle(() => {
    if (key === 'ArrowRight') {
      dispatch({ type: ActionType.MOVE_RIGHT });
    } else if (key === 'ArrowLeft') {
      dispatch({ type: ActionType.MOVE_LEFT });
    }
  });

  return (
    <Rectangle
      positionX={positionX}
      positionY={480 - 30 - MARGIN}
      width={100}
      height={30}
      strokeColor="#000000"
    />
  );
}

export default Paddle;
