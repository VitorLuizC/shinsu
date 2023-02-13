import { useContext } from 'react';
import { CanvasContext } from './Canvas';

function useCanvasContext(): CanvasRenderingContext2D {
  const context = useContext(CanvasContext);

  if (!context)
    throw new Error("Can't use 'useCanvasContext' out of 'Canvas' component.");

  return context;
}

export default useCanvasContext;
