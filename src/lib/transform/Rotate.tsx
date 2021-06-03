import { memo, ReactNode } from 'react';
import { useCanvasContext } from 'lib/canvas';
import Restore from './Restore';
import { useAnimationEffect } from 'lib/animation';

type Props = {
  rotation?: number;
  children: ReactNode;
};

function Rotate(props: Props): JSX.Element {
  const { rotation = 0, children } = props;
  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.save();
    context.rotate((rotation * Math.PI) / 180);
  });

  return (
    <>
      {children}
      <Restore />
    </>
  );
}

export default memo(Rotate);
