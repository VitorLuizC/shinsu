import { Animation } from 'lib/animation';
import Container from './Container';

function Breakout(): JSX.Element {
  return (
    <Animation width={640} height={480}>
      {() => <Container />}
    </Animation>
  );
}

export default Breakout;
