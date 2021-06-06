import { Animation, useAnimationEffect } from 'lib/animation';
import { Canvas, useCanvasContext } from 'lib/canvas';
import { Rotate, Scale, Translate } from 'lib/transform';
import { Radian } from 'lib/unit';

function HourMark(): null {
  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.save();
    context.strokeStyle = 'black';
    context.fillStyle = 'white';
    context.lineWidth = 8;
    context.lineCap = 'round';
    context.beginPath();
    context.moveTo(100, 0);
    context.lineTo(120, 0);
    context.stroke();
    context.restore();
  });
  
  return null;
}

function MinuteMark(): null {
  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.save();
    context.strokeStyle = 'black';
    context.fillStyle = 'white';
    context.lineCap = 'round';
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(117, 0);
    context.lineTo(120, 0);
    context.stroke();
    context.restore();
  });
  
  return null;
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

function HourPointer({ time }: Props): null {
  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.save();
    context.lineCap = 'round';
    context.lineWidth = 14;
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    context.rotate(
      (Math.PI / 6) * getHours(time) +
      (Math.PI / 6 / 60) * time.getMinutes() +
      (Math.PI / 6 / 60 / 60) * time.getSeconds()
    );
    context.beginPath();
    context.moveTo(-20, 0);
    context.lineTo(80, 0);
    context.stroke();
    context.restore();
  });

  return null;
}

function MinutePointer({ time }: Props): null {
  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.save();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.lineWidth = 10;
    context.lineCap = 'round';
    context.rotate(
      (Math.PI / 30) * time.getMinutes() +
      (Math.PI / 30 / 60) * time.getSeconds()
    );
    context.beginPath();
    context.moveTo(-28, 0);
    context.lineTo(112, 0);
    context.stroke();
    context.restore();
  });

  return null;
}

function SecondPointer({ time }: Props): null {
  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.save();
    
    context.lineCap = 'round';
    context.fillStyle = '#D40000';
    context.lineWidth = 6;
    context.strokeStyle = '#D40000';

    // Write seconds
    context.rotate(time.getSeconds() * Math.PI / 30);
    
    context.beginPath();
    context.moveTo(-30, 0);
    context.lineTo(83, 0);
    context.stroke();
    context.beginPath();
    context.arc(0, 0, 10, 0, Math.PI * 2, true);
    context.fill();
    context.beginPath();
    context.arc(95, 0, 10, 0, Math.PI * 2, true);
    context.stroke();
    context.fillStyle = 'rgba(0, 0, 0, 0)';
    context.arc(0, 0, 3, 0, Math.PI * 2, true);
    context.fill();
    context.restore();
  });

  return null;
}

function Border(): null {
  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.save();
    context.beginPath();
    context.lineWidth = 14;
    context.strokeStyle = '#325FA2';
    context.arc(0, 0, 142, 0, Math.PI * 2, true);
    context.stroke();
    context.restore();
  });

  return null;
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
          {Array.from(Array(12), (_, index) => (
            <Rotate rotation={Radian.fromDegree(30 * index)}>
              <HourMark />
            </Rotate>
          ))}

          {Array.from(Array(60), (_, index) => (
            <Rotate rotation={Radian.fromDegree(6 * index)}>
              <MinuteMark />
            </Rotate>
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
