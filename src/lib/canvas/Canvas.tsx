import { ReactNode, useCallback, useLayoutEffect, useRef } from 'react';
import { useIdentify } from 'lib/identity';
import CanvasContext from './CanvasContext';
import createCanvas from './createCanvas';
import createCanvasContext from './createCanvasContext';

type Props = {
  children: ReactNode;
  width?: number;
  height?: number;
};

function Canvas(props: Props): JSX.Element {
  const {
    width = 640,
    height = 480,
    children,
  } = props;

  const identify = useIdentify();

  const canvasRef = useRef<null | HTMLCanvasElement>(null);

  const contextRef = useRef<null | CanvasRenderingContext2D>(null);

  const canvas = canvasRef.current ?? (canvasRef.current = createCanvas({
    id: identify('canvas'),
    className: 'Canvas__canvas',
  }));

  const context = contextRef.current ?? (contextRef.current = createCanvasContext(canvas));

  useLayoutEffect(() => {
    canvas.width = width;
  }, [canvas, width]);

  useLayoutEffect(() => {
    canvas.height = height;
  }, [canvas, height]);

  const containerRef = useCallback((container: null | HTMLDivElement) => {
    if (!container) return;

    container.prepend(canvas);
  }, [canvas]);

  return (
    <CanvasContext.Provider value={{ canvas, context }}>
      <div ref={containerRef} className="Canvas">
        {children}
      </div>
    </CanvasContext.Provider>
  );
}

export default Canvas;
