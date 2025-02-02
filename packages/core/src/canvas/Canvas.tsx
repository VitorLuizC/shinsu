import {
  createContext,
  forwardRef,
  type ReactElement,
  type ReactNode,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import { useIdentify } from '../identity';
import createCanvas from './createCanvas';
import createCanvasContext from './createCanvasContext';

export const CanvasContext = createContext<null | CanvasRenderingContext2D>(null);

export type Props = {
  width?: number;
  height?: number;
  children: ReactNode;
};

const Canvas = forwardRef<CanvasRenderingContext2D, Props>(
  // function' keyword was used to prevent 'displayName' assignment.
  function Canvas(props, ref): ReactElement {
    const {
      width = 640,
      height = 480,
      children,
    } = props;

    const identify = useIdentify();

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const canvas = canvasRef.current ??= createCanvas({
      id: identify('canvas'),
      width,
      height,
      className: 'Canvas__canvas',
    });

    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    const context = contextRef.current ??= createCanvasContext(canvas);

    useLayoutEffect(() => {
      if (canvas.width !== width)
        canvas.setAttribute('width', width.toString(10));

      if (canvas.height !== height)
        canvas.setAttribute('height', height.toString(10));
    }, [canvas, width, height]);

    const containerRef = useCallback((container: null | HTMLDivElement) => {
      if (!container) return;

      container.prepend(canvas);
    }, [canvas]);

    useImperativeHandle(ref, () => context);

    return (
      <CanvasContext.Provider value={context}>
        <div ref={containerRef} className="Canvas">
          {children}
        </div>
      </CanvasContext.Provider>
    );
  },
);

export default Canvas;
