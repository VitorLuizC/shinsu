import './index.css';
import { Animation } from '@shinsu/core';
import useWindowSize from './useWindowSize';
import Bubbles from './Bubbles';

function App(): JSX.Element {
  const size = useWindowSize();

  return (
    <Animation {...size} framesPerSecond={16}>
      {() => <Bubbles />}
    </Animation>
  );
}

export default App;
