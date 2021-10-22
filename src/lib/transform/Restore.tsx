import { useRenderInCycle } from 'lib/render';

function Restore(): null {
  useRenderInCycle((context) => context.restore());

  return null;
}

export default Restore;
