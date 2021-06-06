import { useAnimationEffect } from 'lib/animation';
import { useCanvasContext } from 'lib/canvas';
import type Color from './Color';

type Props = {
  toX?: number;
  toY?: number;
  cap?: CanvasLineCap;
  width?: number;
  positionX?: number;
  positionY?: number;
  strokeColor?: Color;
};

function Line(props: Props): null {
  const {
    toX = 0,
    toY = 0,
    cap,
    width,
    positionX,
    positionY,
    strokeColor,
  } = props;

  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.save();
    if (cap !== undefined)
      context.lineCap = cap;
    if (width)
      context.lineWidth = width;
    if (strokeColor !== undefined)
      context.strokeStyle = strokeColor;
    context.beginPath();
    if (positionX !== undefined || positionY !== undefined)
      context.moveTo(positionX ?? 0, positionY ?? 0);
    context.lineTo(toX, toY);
    if (strokeColor !== undefined)
      context.stroke();
    context.closePath();
    context.restore();
  });

  return null;
}

export default Line;
