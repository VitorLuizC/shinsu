import type { ReactNode } from 'react';
import { useCanvasContext } from 'lib/canvas';
import Restore from './Restore';
import { useAnimationEffect } from 'lib/animation';

type Props = {
  scaleX?: number;
  scaleY?: number;
  children: ReactNode;
};

function Scale(props: Props): JSX.Element {
  const {
    scaleX = 1,
    scaleY = 1,
    children,
  } = props;
  const context = useCanvasContext();

  useAnimationEffect(() => {
    context.save();
    context.scale(scaleX, scaleY);
  });

  return (
    <>
      {children}
      <Restore />
    </>
  );
}

export default Scale;
