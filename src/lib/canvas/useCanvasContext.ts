import { useContext } from 'react';
import CanvasContext from './CanvasContext';

function useCanvasContext() {
  const context = useContext(CanvasContext);
  if (!context)
    throw new Error('Can\'t use `useCanvas` out of `Canvas` component.');
  return context.context;
}

export default useCanvasContext;
