import type { Source } from './Source';
import type { SourceType } from './SourceType';

function createSource(type: 'image'): HTMLImageElement;
function createSource(type: 'audio'): HTMLAudioElement;
function createSource(type: 'video'): HTMLVideoElement;
function createSource(type: SourceType): Source;
function createSource(type: SourceType): Source {
  switch (type) {
    case 'image':
      return window.document.createElement('img');
    case 'audio':
      return window.document.createElement('audio');
    case 'video':
      return window.document.createElement('video');
    default:
      throw new Error(`Invalid resource type "${type}".`);
  }
}

export default createSource;
