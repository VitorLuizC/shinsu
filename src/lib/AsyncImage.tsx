import { ComponentType, lazy, useMemo } from 'react';
import Image from './Image/Image';

type Props = {
  uri: string;
};

type LazyComponent = {
  default: ComponentType;
}

function AsyncImage({ uri }: Props): JSX.Element {
  const Lazy = useMemo(() => {
    return lazy(() => {
      return new Promise<LazyComponent>((resolve, reject) => {
        const source = window.document.createElement('img');

        // TODO: Improve this.
        // @ts-ignore
        source.onerror = (event) => reject(event.error);
        source.onload = () => resolve({
          default: () => <Image source={source} />,
        });
        source.src = uri;
      });
    });
  }, [uri]);

  return <Lazy />;
}

export default AsyncImage;
