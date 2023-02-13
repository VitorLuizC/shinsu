import { useEffect, useState } from 'react';

export type WindowSize = {
  width: number;
  height: number;
}

export function getWindowSize(): WindowSize {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function useWindowSize(): WindowSize {
  const [size, setSize] = useState(getWindowSize);

  useEffect(() => {
    const handleResize = () => {
      setSize(getWindowSize);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return size;
}

export default useWindowSize;
