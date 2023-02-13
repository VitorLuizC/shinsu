import { useEffect, useRef } from 'react';

function usePrevious<T>(value: T) {
  const valueRef = useRef<null | T>(null);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef.current;
}

export default usePrevious;
