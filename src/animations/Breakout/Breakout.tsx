import { Animation } from 'lib/animation';
import Game from './Game';

function Breakout(): JSX.Element {
  return (
    <Animation width={640} height={480}>
      {() => <Game />}
    </Animation>
  );
}

export default Breakout;
