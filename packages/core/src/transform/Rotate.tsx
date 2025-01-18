import type { ReactElement, ReactNode } from 'react';
import Restore from './Restore';
import { useRenderInCycle } from '../render';

type Props = {
  rotation?: number;
  children: ReactNode;
};

function Rotate(props: Props): ReactElement {
  const { rotation = 0, children } = props;

  useRenderInCycle((context) => {
    context.save();
    context.rotate(rotation);
  });

  return (
    <>
      {children}
      <Restore />
    </>
  );
}

export default Rotate;
