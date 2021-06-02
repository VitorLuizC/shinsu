import { ReactNode, useEffect, useLayoutEffect, useRef } from 'react';
import { useIdentify } from '../identity';
import CanvasContext from './CanvasContext';

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

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const contextRef = useRef<CanvasRenderingContext2D>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const canvas = canvasRef.current ?? window.document.createElement('canvas');

  const context = contextRef.current ?? canvas.getContext('2d', {
    alpha: true,
    desynchronized: false,
  });

  if (!context)
    throw new Error('Couldn\'t get canvas\' context.');

  useLayoutEffect(() => {
    canvas.width = width;
  }, [canvas, width]);

  useLayoutEffect(() => {
    canvas.height = height;
  }, [canvas, height]);

  useEffect(() => {
    if (!containerRef.current) return;

    canvas.id = identify('canvas');
    canvas.classList.add('Canvas__canvas');
    containerRef.current.prepend(canvas);
  }, [canvas, identify]);

  return (
    <CanvasContext.Provider value={{ canvas, context }}>
      <div ref={containerRef} className="Canvas">
        {children}
      </div>
    </CanvasContext.Provider>
  );
}

export default Canvas;
