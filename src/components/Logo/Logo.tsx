import { useState } from 'react';
import LOGO_URL from './logo.svg';
import { LazyImage } from 'lib/image';
import { Rotate, Translate } from 'lib/transform';
import { useAnimationFrame } from 'lib/animation';

function Logo(): JSX.Element | null {
  const [angle, setAngle] = useState(0);

  useAnimationFrame(() => setAngle((angle) => angle + 0.001));

  return (
    <Rotate angle={angle}>
      <Translate center>
        <LazyImage uri={LOGO_URL} rotate={angle} />
      </Translate>
    </Rotate>
  );
}

export default Logo;
