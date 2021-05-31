import { ReactNode, useEffect, useRef } from "react";
import useIdentify from '../../hooks/useIdentify';
import CanvasContext from "./CanvasContext";

type Props = {
  children: ReactNode;
  width?: number;
  height?: number;
};

function Canvas({ width, height, children }: Props): JSX.Element {
  const identify = useIdentify();

  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const contextRef = useRef<null | CanvasRenderingContext2D>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);

  if (!canvasRef.current) {
    canvasRef.current = window.document.createElement('canvas');
    canvasRef.current.id = identify('canvas');
    canvasRef.current.classList.add('Canvas__canvas');
  }

  if (Number.isFinite(width))
    canvasRef.current.width = width as number;

  if (Number.isFinite(height))
    canvasRef.current.height = height as number;

  if (!contextRef.current) {
    contextRef.current = canvasRef.current.getContext('2d', {
      alpha: true,
      desynchronized: false,
    });

    if (!contextRef.current)
      throw new Error('Couldn\'t get canvas\' context.');
  }

  useEffect(() => {
    if (!containerRef.current) return;

    // `!` was used because it will not be `null` when effect is executed.
    containerRef.current.prepend(canvasRef.current!);
  }, []);

  return (
    <CanvasContext.Provider value={{
      canvas: canvasRef.current,
      context: contextRef.current,
    }}>
      <div className="Canvas" ref={containerRef}>
        {children}
      </div>
    </CanvasContext.Provider>
  )
}

export default Canvas;
