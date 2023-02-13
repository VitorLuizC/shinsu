import { LazyImage, Circle } from '@shinsu/core';

const distance = 28.5;

function Moon(): JSX.Element {
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

export default Moon;
