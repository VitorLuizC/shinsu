import type ActionType from './ActionType';

type Action =
  | { type: ActionType.MOVE_LEFT }
  | { type: ActionType.MOVE_RIGHT };

export default Action;