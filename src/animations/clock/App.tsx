import { Renderer } from 'lib/renderer';
import Clock from './Clock';

function App(): JSX.Element {
  return (
    <Renderer width={150} height={150} framesPerSecond={1}>
      <Clock />
    </Renderer>
  );
}
export default App;
