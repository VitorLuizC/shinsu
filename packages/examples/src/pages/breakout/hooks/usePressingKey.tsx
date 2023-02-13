import { useEffect, useState } from 'react';

function resolveKey(event: KeyboardEvent): string {
  let key = '';
  if (event.metaKey)
    key += 'Win + ';
  if (event.ctrlKey)
    key += 'Ctrl + ';
  if (event.shiftKey)
    key += 'Shift + ';
  if (event.altKey)
    key += 'Alt + ';
  return key + event.key;
}

function usePressingKey(): null | string {
  const [pressingKey, setPressingKey] = useState<null | string>(null);

  useEffect(() => {
    const handleKeyUp = () => {
      setPressingKey(null);
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      setPressingKey(resolveKey(event));
    };

    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return pressingKey;
}

export default usePressingKey;
