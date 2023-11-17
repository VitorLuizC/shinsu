import { useRenderInCycle } from '../render';
import type Color from './Color';

type Props = {
  width: number;
  height: number;
  fillColor?: Color;
  positionX?: number;
  positionY?: number;
  strokeWidth?: number;
  strokeColor?: Color;
};

function Rectangle(props: Props): null {
  const {
    width,
    height,
    fillColor,
    strokeColor,
    strokeWidth,
    positionX = 0,
    positionY = 0,
  } = props;

  useRenderInCycle((context) => {
    context.save();
    context.beginPath();

    if (fillColor !== undefined)
      context.fillStyle = fillColor;

    if (strokeColor !== undefined)
      context.strokeStyle = strokeColor;

    if (strokeWidth !== undefined)
      context.lineWidth = strokeWidth;

    context.rect(positionX, positionY, width, height);

    if (fillColor !== undefined)
      context.fill();

    if (strokeColor !== undefined || strokeWidth !== undefined)
      context.stroke();

    context.closePath();
    context.restore();
  });

  return null;
}

export default Rectangle;
