import { useState } from 'react';
import { LazyImage } from 'lib/image';
import { Rotate } from 'lib/transform';
import { Radian } from 'lib/unit';
import { useRender } from 'lib/renderer';
import LOGO_URL from './logo.svg';

function Logo(): JSX.Element {
  const [{ rotation }, setRotation] = useState(() => ({
    rotation: 0,
    clockwise: true,
  }));

  useRender((context) => {
    setRotation((state) => ({
      clockwise: rotation > Radian.fromDegree(360) ? false : rotation < 0 ? true : state.clockwise,
      rotation: state.clockwise ? state.rotation + Radian.DEGREE : state.rotation - Radian.DEGREE,
    }));

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  });

  return (
    <Rotate rotation={rotation}>
      <LazyImage
        uri={LOGO_URL}
        width={841.9}
        height={595.3}
      />
    </Rotate>
  );
}

export default Logo;
