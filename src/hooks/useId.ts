import { useMemo } from 'react';
import generateHash from '../utils/generateHash';

function useId(): string {
  return useMemo(() => 'id-' + generateHash(), []);
}

export default useId;
