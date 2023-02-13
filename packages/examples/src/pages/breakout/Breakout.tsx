import { Animation } from '@shinsu/core';
import Container from './Container';

function Breakout(): JSX.Element {
  return (
    <Animation width={640} height={480}>
      <Container />
    </Animation>
  );
}

export default Breakout;
