import { useAnimationEffect } from 'lib/animation';
import { useCanvasContext } from 'lib/canvas';

type Color = string | CanvasGradient | CanvasPattern;

type Props = {
  size: number;
  fillColor?: Color;
  positionX?: number;
  positionY?: number;
  strokeColor?: Color;
};

function Circle(props: Props): null {
  const {
    size = 0,
    fillColor,
    strokeColor,
    positionX = 0,
    positionY = 0,
  } = props;

  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.save();
    context.beginPath();

    if (fillColor !== undefined)
      context.fillStyle = fillColor;

    if (strokeColor !== undefined)
      context.strokeStyle = strokeColor;

    context.arc(positionX, positionY, size / 2, 0, Math.PI * 2, false);

    if (fillColor !== undefined)
      context.fill();

    if (strokeColor !== undefined)
      context.stroke();
    context.closePath();
    context.restore();
  });

  return null;
}

export default Circle;
