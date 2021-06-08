import { LazyImage } from 'lib/image';

function Earth(): JSX.Element {
  return (
    <LazyImage
      uri="https://mdn.mozillademos.org/files/1429/Canvas_earth.png"
      positionX={-12}
      positionY={-12}
    />
  );
}

export default Earth;
