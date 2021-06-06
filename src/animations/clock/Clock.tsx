import { Animation, useAnimationEffect } from 'lib/animation';
import { Canvas, useCanvasContext } from 'lib/canvas';
import { Circle, Line } from 'lib/shape';
import { Rotate, Scale, Translate } from 'lib/transform';
import { Radian } from 'lib/unit';

type HourMarkProps = {
  hour: number;
};

function HourMark({ hour }: HourMarkProps): JSX.Element {
  return (
    <Rotate rotation={Radian.fromDegree(30 * hour)}>
      <Line
        cap="round"
        width={8}
        toX={120}
        positionX={100}
        strokeColor="#000000"
      />
    </Rotate>
  );
}

type MinuteMarkProps = {
  minute: number;
};

function MinuteMark({ minute }: MinuteMarkProps): JSX.Element {
  return (
    <Rotate rotation={Math.PI / 30 * minute}>
      <Line
        cap="round"
        toX={120}
        width={5}
        positionX={117}
        strokeColor="#000000"
      />
    </Rotate>
  );
}

type Props = {
  time: Date;
};

function getHours(time: Date): number {
  const hours = time.getHours();
  if (hours < 12)
    return hours;
  return hours - 12;
}

function HourPointer({ time }: Props): JSX.Element {
  const rotation = (
    (Math.PI / 6) * getHours(time) +
    (Math.PI / 6 / 60) * time.getMinutes() +
    (Math.PI / 6 / 60 / 60) * time.getSeconds()
  );

  return (
    <Rotate rotation={rotation}>
      <Line
        cap="round"
        toX={80}
        width={14}
        strokeColor="#000000"
        positionX={-20}
      />
    </Rotate>
  );
}

function MinutePointer({ time }: Props): JSX.Element {
  const rotation = (
    (Math.PI / 30) * time.getMinutes() +
    (Math.PI / 30 / 60) * time.getSeconds()
  );

  return (
    <Rotate rotation={rotation}>
      <Line
        cap="round"
        toX={112}
        width={10}
        positionX={-28}
        strokeColor="#000000"
      />
    </Rotate>
  );
}

function SecondPointer({ time }: Props): JSX.Element {
  const rotation = time.getSeconds() * Math.PI / 30;

  return (
    <Rotate rotation={rotation}>
      <Line
        cap="round"
        toX={83}
        width={6}
        positionX={-30}
        strokeColor="#d40000"
      />
      <Circle
        size={20}
        positionX={95}
        strokeColor="#d40000"
        strokeWidth={6}
      />
      <Circle
        size={6}
        fillColor="#d40000"
      />
    </Rotate>
  );
}

function Border(): JSX.Element {
  return (
    <Circle
      size={284}
      strokeWidth={14}
      strokeColor="#325fa2"
    />
  );
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
          {Array.from(Array(12), (_, hour) => (
            <HourMark hour={hour} />
          ))}
          {Array.from(Array(60), (_, minute) => (
            <MinuteMark minute={minute} />
          ))}
          <HourPointer time={time} />
          <MinutePointer time={time} />
          <SecondPointer time={time} />
          <Border />
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
  )
}

export default App;
