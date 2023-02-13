import { LazyImage } from '@shinsu/core';

function Sun(): JSX.Element {
  return (
    <LazyImage
      uri="https://mdn.mozillademos.org/files/1456/Canvas_sun.png"
      width={300}
      height={300}
    />
  );
}

export default Sun;
