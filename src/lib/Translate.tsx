import { ReactNode, useLayoutEffect } from 'react';
import { useCanvasContext } from '../components/Canvas';
import Restore from './Restore';

type Props = {
  x?: number;
  y?: number;
  center?: boolean;
  children?: ReactNode;
};

function Translate(props: Props): JSX.Element {
  const {
    x = 0,
    y = 0,
    center = false,
    children,
  } = props;

  const context = useCanvasContext();

  useLayoutEffect(() => {
    context.save();
    context.translate(
      center ? context.canvas.width / 2 : x,
      center ? context.canvas.height / 2 : y,
    );
  });

  return (
    <>
      {children}
      <Restore />
    </>
  );
}

export default Translate;
