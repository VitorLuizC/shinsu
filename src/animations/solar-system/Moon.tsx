import { LazyImage } from 'lib/image';

export default function Moon() {
  const date = new Date();

  const rotate = (
    ((2 * Math.PI) / 6) * date.getSeconds() +
    ((2 * Math.PI) / 6000) * date.getMilliseconds()
  );

  return (
    <LazyImage
      uri="https://mdn.mozillademos.org/files/1443/Canvas_moon.png"
      rotate={rotate}
      positionX={-3.5}
      positionY={-3.5}
      translateY={28.5}
    />
  );
}
