import type { ReactNode } from 'react';
import { useCanvasContext } from 'lib/canvas';
import Restore from './Restore';

type Props = {
  x?: number;
  y?: number;
  center?: boolean;
  children: ReactNode;
};

function Translate(props: Props): JSX.Element {
  const {
    x = 0,
    y = 0,
    center = false,
    children,
  } = props;

  const context = useCanvasContext();

  context.save();
  if (center)
    context.translate(context.canvas.width / 2, context.canvas.height / 2);
  else
    context.translate(x, y);


  return (
    <>
      {children}
      <Restore />
    </>
  );
}

export default Translate;
