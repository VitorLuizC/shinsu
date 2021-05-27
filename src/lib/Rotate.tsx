import { memo, ReactNode, useLayoutEffect } from "react";
import { useCanvasContext } from "../components/Canvas"

type Props = {
  angle: number;
  children?: ReactNode;
};

function Rotate({ angle, children }: Props): JSX.Element {
  const context = useCanvasContext();

  useLayoutEffect(() => {
    const radians = angle * Math.PI / 180;

    context.rotate(radians);
  });

  return <>{children}</>;
}

export default memo(Rotate);
