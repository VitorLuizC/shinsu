import { useEffect, useState } from 'react';
import type Position from './Position';

function toPosition(target: Touch | MouseEvent): Position {
  return {
    x: target.clientX,
    y: target.clientY,
  };
}

function useCursorPositions() {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPositions([toPosition(event)]);
    };

    const handleTouchMove = (event: TouchEvent) => {
      setPositions(Array.from(event.touches, toPosition));
    };

    window.document.addEventListener('mousemove', handleMouseMove);
    window.document.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.document.removeEventListener('mousemove', handleMouseMove);
      window.document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return positions;
}

export default useCursorPositions;
