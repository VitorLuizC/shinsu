import { Rotate, Scale, Translate } from 'lib/transform';
import { Radian } from 'lib/unit';
import Border from './Border';
import HourMark from './HourMark';
import MinuteMark from './MinuteMark';
import MinutePointer from './MinutePointer';
import HourPointer from './HourPointer';
import SecondPointer from './SecondPointer';
import { Renderer, useRender } from 'lib/renderer';

function range(from: number, to: number): number[] {
  return Array.from(Array(to - from), (_, index) => index + from);
}

function Clock() {
  const time = new Date();

  useRender((context) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  });

  return (
    <Translate center>
      <Scale scaleX={0.4} scaleY={0.4}>
        <Rotate rotation={Radian.fromDegree(-90)}>
          <Border />
          {range(0, 12).map((hour) => (
            <HourMark hour={hour} />
          ))}
          {range(0, 60).map((minute) => (
            <MinuteMark minute={minute} />
          ))}
          <HourPointer time={time} />
          <MinutePointer time={time} />
          <SecondPointer time={time} />
        </Rotate>
      </Scale>
    </Translate>
  );
}

function App(): JSX.Element {
  return (
    <Renderer width={150} height={150} framesPerSecond={1}>
      <Clock />
    </Renderer>
  );
}

export default App;
