import { useCallback, useEffect, useRef } from 'react';

export type Mounted = () => boolean;

function useMounted(): Mounted {
  const mountedRef = useRef(true);

  useEffect(() => () => {
    mountedRef.current = false;
  }, []);

  return useCallback(() => mountedRef.current ?? false, []);
}

export default useMounted;
