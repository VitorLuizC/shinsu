import type { Source } from './Source';
import type { SourceType } from './SourceType';
import createSource from './createSource';

function fetchSource(uri: string, type: 'image'): Promise<HTMLImageElement>;
function fetchSource(uri: string, type: 'audio'): Promise<HTMLAudioElement>;
function fetchSource(uri: string, type: 'video'): Promise<HTMLVideoElement>;
function fetchSource(uri: string, type: SourceType): Promise<Source>;
function fetchSource(uri: string, type: SourceType): Promise<Source> {
  const source = createSource(type);

  return new Promise<Source>((resolve, reject) => {
    const onLoad = () => {
      removeListeners();
      resolve(source);
    };

    const onError = (event: Event) => {
      removeListeners();
      const error = new Error(`Cannot fetch source '${uri}' with type '${type}'`);
      // TODO: Create new class for this error instead.
      Object.assign(error, { uri, type, event });
      reject(error);
    };

    const removeListeners = () => {
      source.removeEventListener('load', onLoad);
      source.removeEventListener('error', onError);
    };

    source.addEventListener('load', onLoad);
    source.addEventListener('error', onError);
    source.src = uri;
  });
}

export default fetchSource;
