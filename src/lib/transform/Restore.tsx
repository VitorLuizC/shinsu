import { useRender } from 'lib/renderer';

function Restore(): null {
  useRender((context) => context.restore());

  return null;
}

export default Restore;
