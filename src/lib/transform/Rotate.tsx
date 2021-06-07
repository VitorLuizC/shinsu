import type { ReactNode } from 'react';
import Restore from './Restore';
import { useRender } from 'lib/renderer';

type Props = {
  rotation?: number;
  children: ReactNode;
};

function Rotate(props: Props): JSX.Element {
  const { rotation = 0, children } = props;

  useRender((context) => {
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
