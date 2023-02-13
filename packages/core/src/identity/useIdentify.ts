import { useCallback, useMemo } from 'react';
import generateHash from './generateHash';

export type Identify = (name: string) => string;

function useIdentify(): Identify {
  const ids = useMemo(() => new Map<string, string>(), []);

  return useCallback((name) => {
    if (!ids.has(name)) {
      ids.set(name, `id-${generateHash()}`);
    }

    // `!` was used because it was checked in the `if` above.
    return ids.get(name)!;
  }, [ids]);
}

export default useIdentify;
