import { Animation, useAnimationEffect } from 'lib/animation';
import { Canvas, useCanvasContext } from 'lib/canvas';
import { Rotate, Scale, Translate } from 'lib/transform';
import { Radian } from 'lib/unit';
import Border from './Border';
import HourMark from './HourMark';
import MinuteMark from './MinuteMark';
import MinutePointer from './MinutePointer';
import HourPointer from './HourPointer';
import SecondPointer from './SecondPointer';

function range(from: number, to: number): number[] {
  return Array.from(Array(to - from), (_, index) => index + from);
}

function Clock() {
  const context = useCanvasContext();

  const time = new Date();

  useAnimationEffect(() => {
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
    <Canvas width={150} height={150}>
      <Animation>
        <Clock />
      </Animation>
    </Canvas>
  );
}

export default App;
