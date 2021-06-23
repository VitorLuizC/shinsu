import { useCallback, useRef } from 'react';
import type AnyFunction from './AnyFunction';
import type Singleton from './Singleton';

function useSingleton<C extends AnyFunction>(callback: C): Singleton<C> {
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  return useCallback((...args) => callbackRef.current(...args), []);
}

export default useSingleton;
