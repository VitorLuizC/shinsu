import { useCallback, useRef } from 'react';
import type AnyFunction from './AnyFunction';
import type IdentityOf from './IdentityOf';

function useSingleton<C extends AnyFunction>(callback: C): IdentityOf<C> {
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  return useCallback((...args) => callbackRef.current(...args), []);
}

export default useSingleton;
