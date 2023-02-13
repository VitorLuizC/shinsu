import { useRenderInCycle } from '../render';

function Restore(): null {
  useRenderInCycle((context) => context.restore());

  return null;
}

export default Restore;
