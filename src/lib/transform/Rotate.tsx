import type { ReactNode } from 'react';
import { useCanvasContext } from 'lib/canvas';
import Restore from './Restore';

type Props = {
  angle?: number;
  children: ReactNode;
};

function Rotate(props: Props): JSX.Element {
  const { angle = 0, children } = props;
  const context = useCanvasContext();

  context.save();
  context.rotate((angle * Math.PI) / 180);

  return (
    <>
      {children}
      <Restore />
    </>
  );
}

export default Rotate;
