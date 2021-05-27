import { ReactNode, useEffect, useRef } from "react";
import useIdentify from '../../hooks/useIdentify';
import LayerContext from "./CanvasContext";

type Props = {
  children: ReactNode;
};

function Canvas({ children }: Props) {
  const identify = useIdentify();

  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const contextRef = useRef<null | CanvasRenderingContext2D>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);

  if (!canvasRef.current) {
    canvasRef.current = window.document.createElement('canvas');
    canvasRef.current.id = identify('canvas');
    canvasRef.current.classList.add('Canvas__canvas');
  }

  if (!contextRef.current) {
    contextRef.current = canvasRef.current.getContext('2d');

    if (!contextRef.current)
      throw new Error('Couldn\'t get canvas\' context.');
  }

  useEffect(() => {
    if (!containerRef.current) return;

    // `!` was used because it will not be `null` when effect is executed.
    containerRef.current.prepend(canvasRef.current!);
  }, [])

  return (
    <LayerContext.Provider value={{
      canvas: canvasRef.current,
      context: contextRef.current,
    }}>
      <div className="Canvas" ref={containerRef}>
        {children}
      </div>
    </LayerContext.Provider>
  )
}

export default Canvas;
