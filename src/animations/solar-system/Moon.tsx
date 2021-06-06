import { LazyImage } from 'lib/image';
import { Circle } from 'lib/shape';

const distance = 28.5;

export default function Moon() {
  const date = new Date();

  const rotate = (
    ((2 * Math.PI) / 6) * date.getSeconds() +
    ((2 * Math.PI) / 6000) * date.getMilliseconds()
  );

  return (
    <>
      <Circle
        size={distance * 2}
        strokeColor="rgba(0, 153, 255, 0.4)"
      />
      <LazyImage
        uri="https://mdn.mozillademos.org/files/1443/Canvas_moon.png"
        rotate={rotate}
        positionX={-3.5}
        positionY={-3.5}
        translateY={distance}
      />
    </>
  );
}
