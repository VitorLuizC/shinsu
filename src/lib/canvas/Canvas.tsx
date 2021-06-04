import { ReactNode, useCallback, useLayoutEffect, useMemo, useRef } from 'react';
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

  const canvasRef = useRef<HTMLCanvasElement>();

  const contextRef = useRef<CanvasRenderingContext2D>();

  const canvas = canvasRef.current ?? (canvasRef.current = createCanvas({
    id: identify('canvas'),
    width,
    height,
    className: 'Canvas__canvas',
  }));

  const context = contextRef.current ?? (contextRef.current = createCanvasContext(canvas));

  useLayoutEffect(() => {
    if (canvas.width !== width)
      canvas.width = width;

    if (canvas.height !== height)
      canvas.height = height;
  }, [canvas, width, height]);

  const containerRef = useCallback((container: null | HTMLDivElement) => {
    if (!container) return;

    container.prepend(canvas);
  }, [canvas]);

  const value = useMemo(() => ({ canvas, context }), [canvas, context]);

  return (
    <CanvasContext.Provider value={value}>
      <div ref={containerRef} className="Canvas">
        {children}
      </div>
    </CanvasContext.Provider>
  );
}

export default Canvas;
