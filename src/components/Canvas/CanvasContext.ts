import { createContext } from 'react';

export type CanvasContextValue = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
};

const CanvasContext = createContext<null | CanvasContextValue>(null);

export default CanvasContext;
