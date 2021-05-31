import { memo, ReactNode, useLayoutEffect } from 'react';
import { useCanvasContext } from '../components/Canvas';
import Restore from './Restore';

type Props = {
  angle: number;
  children?: ReactNode;
};

function Rotate(props: Props): JSX.Element {
  const { angle, children } = props;
  const context = useCanvasContext();

  useLayoutEffect(() => {
    context.save();
    context.rotate((angle * Math.PI) / 180);
  });

  return (
    <>
      {children}
      <Restore />
    </>
  );
}

export default memo(Rotate);
