import type { ReactElement, ReactNode } from 'react';
import Restore from './Restore';
import { useRenderInCycle } from '../render';

type Props = {
  x?: number;
  y?: number;
  center?: boolean;
  children: ReactNode;
};

function Translate(props: Props): ReactElement {
  const {
    x = 0,
    y = 0,
    center = false,
    children,
  } = props;

  useRenderInCycle((context) => {
    context.save();

    if (center)
      context.translate(context.canvas.width / 2, context.canvas.height / 2);
    else
      context.translate(x, y);
  });

  return (
    <>
      {children}
      <Restore />
    </>
  );
}

export default Translate;
