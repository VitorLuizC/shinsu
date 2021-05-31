import { useLayoutEffect } from "react";
import { useCanvasContext } from "../../components/Canvas";

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
    rotate = 0,
    source,
    position: [x, y] = [0, 0],
    translate: [translateX, translateY] = [0, 0],
  } = props;

  useLayoutEffect(() => {
    context.save();

    context.rotate(rotate);
    context.translate(translateX, translateY);
    context.drawImage(source, x, y, width ?? source.width, height ?? source.height);

    context.restore();
  });

  return null;
}

export default Image;
