import { Animation } from 'lib/animation';
import Paddle from './Paddle';
import { useStore } from './store';

export const MARGIN = 10;

function Breakout(): JSX.Element {
  const [state, dispatch] = useStore();

  return (
    <Animation width={640} height={480}>
      {() => (
        <Paddle
          dispatch={dispatch}
          positionX={state.paddle.position.x}
        />
      )}
    </Animation>
  );
}

export default Breakout;
