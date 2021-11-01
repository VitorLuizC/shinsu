import type Action from './Action';
import type State from './State';
import ActionType from './ActionType';

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.MOVE_LEFT:
      return {
        ...state,
        paddle: {
          ...state.paddle,
          position: {
            ...state.paddle.position,
            x: state.paddle.position.x - 1,
          },
        },
      };
    case ActionType.MOVE_RIGHT:
      return {
        ...state,
        paddle: {
          ...state.paddle,
          position: {
            ...state.paddle.position,
            x: state.paddle.position.x + 1,
          },
        },
      };
    default:
      return state;
  }
}

export default reducer;
