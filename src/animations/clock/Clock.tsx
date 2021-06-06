import { Animation, useAnimationEffect } from 'lib/animation';
import { Canvas, useCanvasContext } from 'lib/canvas';
import { Rotate, Scale, Translate } from 'lib/transform';

function Clock1(): null {
  const now = new Date();
  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.save();
    context.strokeStyle = 'black';
    context.fillStyle = 'white';
    context.lineWidth = 8;
    context.lineCap = 'round';

    // Hour marks
    context.save();
    for (var i = 0; i < 12; i++) {
      context.beginPath();
      context.rotate(Math.PI / 6);
      context.moveTo(100, 0);
      context.lineTo(120, 0);
      context.stroke();
    }
    context.restore();

    // Minute marks
    context.save();
    context.lineWidth = 5;
    for (i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        context.beginPath();
        context.moveTo(117, 0);
        context.lineTo(120, 0);
        context.stroke();
      }
      context.rotate(Math.PI / 30);
    }
    context.restore();

    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    context.fillStyle = 'black';

    // write Hours
    context.save();
    context.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
    context.lineWidth = 14;
    context.beginPath();
    context.moveTo(-20, 0);
    context.lineTo(80, 0);
    context.stroke();
    context.restore();

    // write Minutes
    context.save();
    context.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(-28, 0);
    context.lineTo(112, 0);
    context.stroke();
    context.restore();

    // Write seconds
    context.save();
    context.rotate(sec * Math.PI / 30);
    context.strokeStyle = '#D40000';
    context.fillStyle = '#D40000';
    context.lineWidth = 6;
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

  useAnimationEffect(() => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  });

  return (
    <Translate center>
      <Scale scaleX={0.4} scaleY={0.4}>
        <Rotate rotation={-Math.PI / 2}>
          <Clock1 />
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
