import { useAnimationEffect } from 'lib/animation';
import { useCanvasContext } from 'lib/canvas';
import type Color from './Color';

type Props = {
  size: number;
  fillColor?: Color;
  positionX?: number;
  positionY?: number;
  strokeWidth?: number;
  strokeColor?: Color;
};

function Circle(props: Props): null {
  const {
    size = 0,
    fillColor,
    strokeColor,
    strokeWidth,
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

    if (strokeWidth !== undefined)
      context.lineWidth = strokeWidth;

    context.arc(positionX, positionY, size / 2, 0, Math.PI * 2, false);

    if (fillColor !== undefined)
      context.fill();

    if (strokeColor !== undefined || strokeWidth !== undefined)
      context.stroke();
    context.closePath();
    context.restore();
  });

  return null;
}

export default Circle;
