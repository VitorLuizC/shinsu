import { useCallback, useRef } from 'react';
import type AnyFunction from './AnyFunction';

function useSingleton<C extends AnyFunction>(callback: C): C {
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  return useCallback<C>(((...args) => callbackRef.current(...args)) as C, []);
}

export default useSingleton;
