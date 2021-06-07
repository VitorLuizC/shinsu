import type { ReactNode } from 'react';
import Restore from './Restore';
import { useRender } from 'lib/renderer';

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

  useRender((context) => {
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
