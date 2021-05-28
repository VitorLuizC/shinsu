export type Source = HTMLImageElement | HTMLAudioElement | HTMLVideoElement;

function createSource(type: string): Source {
  switch (type) {
    case 'image':
      return window.document.createElement('video');
    case 'audio':
      return window.document.createElement('audio');
    case 'video':
      return window.document.createElement('video');
    default:
      throw new Error(`Invalid resource type "${type}".`);
  }
}

function fetchSource(uri: string, type: 'image'): Promise<HTMLImageElement>;
function fetchSource(uri: string, type: 'audio'): Promise<HTMLAudioElement>;
function fetchSource(uri: string, type: 'video'): Promise<HTMLVideoElement>;
function fetchSource(uri: string, type: string): Promise<Source> {
  const source = createSource(type);

  return new Promise((resolve, reject) => {
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

    source.removeEventListener('load', onLoad);
    source.removeEventListener('error', onError);
    source.src = uri;
  });
}

export default fetchSource;
