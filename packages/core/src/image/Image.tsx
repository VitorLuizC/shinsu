import { useRenderInCycle } from '../render';

type Props = {
  width?: number;
  height?: number;
  rotate?: number;
  source: HTMLImageElement;
  positionX?: number;
  positionY?: number;
  translateX?: number;
  translateY?: number;
};

function Image(props: Props): null {
  const {
    source,
    rotate,
    translateX,
    translateY,
    width = source.width,
    height = source.height,
    positionX = 0,
    positionY = 0,
  } = props;

  useRenderInCycle((context) => {
    context.save();
    if (rotate !== undefined)
      context.rotate(rotate);
    if (translateX !== undefined || translateY !== undefined)
      context.translate(translateX ?? 0, translateY ?? 0);
    context.drawImage(source, positionX, positionY, width, height);
    context.restore();
  });

  return null;
}

export default Image;
