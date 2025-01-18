import { type ComponentProps, lazy, type ReactElement, useMemo } from 'react';
import { fetchSource } from '../source';
import Image from './Image';

type ImageProps = Omit<ComponentProps<typeof Image>, 'source'>;

type Props = ImageProps & {
  uri: string;
};

function LazyImage({ uri, ...props }: Props): ReactElement {
  const Lazy = useMemo(() => {
    return lazy(async () => {
      const source = await fetchSource(uri, 'image');

      return {
        default: (props: ImageProps) => <Image {...props} source={source} />,
      };
    });
  }, [uri]);

  return <Lazy {...props} />;
}

export default LazyImage;
