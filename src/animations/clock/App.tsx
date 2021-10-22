import Animation from 'lib/animation/Animation';
import { Rotate, Scale, Translate } from 'lib/transform';
import Border from './Border';
import HourMark from './HourMark';
import HourPointer from './HourPointer';
import MinuteMark from './MinuteMark';
import MinutePointer from './MinutePointer';
import SecondPointer from './SecondPointer';

function range(from: number, to: number): number[] {
  return Array.from(Array(to - from), (_, index) => index + from);
}

function App(): JSX.Element {
  return (
    <Animation width={150} height={150} framesPerSecond={1}>
      {({ time }) => (
        <Translate center>
          <Scale scaleX={0.4} scaleY={0.4}>
            <Rotate rotation={Math.PI / 2}>
              <Border />
              {range(0, 12).map((hour) => (
                <HourMark key={hour} hour={hour} />
              ))}
              {range(0, 60).map((minute) => (
                <MinuteMark key={minute} minute={minute} />
              ))}
              <HourPointer time={new Date(time)} />
              <MinutePointer time={new Date(time)} />
              <SecondPointer time={new Date(time)} />
            </Rotate>
          </Scale>
        </Translate>
      )}
    </Animation>
  );
}
export default App;
