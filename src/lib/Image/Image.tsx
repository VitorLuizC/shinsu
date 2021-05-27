import { useLayoutEffect } from "react";
import { useCanvasContext } from "../../components/Canvas";

export type Position = [x: number, y: number];

type Props = {
  width?: number;
  height?: number;
  source: HTMLImageElement;
  position?: Position;
};

function Image({ source, position: [x, y] = [0, 0], width, height }: Props): null {
  const context = useCanvasContext();

  useLayoutEffect(() => {
    context.drawImage(source, x, y, width ?? source.width, height ?? source.height);

    return () => context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  });

  return null;
}

export default Image;
