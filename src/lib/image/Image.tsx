import { useAnimationEffect } from 'lib/animation';
import { useCanvasContext } from 'lib/canvas';
import { memo } from 'react';

export type Position = [x: number, y: number];

type Props = {
  width?: number;
  height?: number;
  rotate?: number;
  source: HTMLImageElement;
  position?: Position;
  translate?: Position;
};

function Image(props: Props): null {
  const context = useCanvasContext();

  const {
    width,
    height,
    rotate,
    source,
    position: [x, y] = [0, 0],
    translate: [translateX, translateY] = [0, 0],
  } = props;

  useAnimationEffect(() => {
    context.save();
    if (rotate !== undefined)
      context.rotate(rotate);
    context.translate(translateX, translateY);
    context.drawImage(source, x, y, width ?? source.width, height ?? source.height);
    context.restore();
  });

  return null;
}

export default memo(Image);
