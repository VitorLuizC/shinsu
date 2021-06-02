import { useEffect, useState } from 'react';
import fetchImage from 'fetch-img';
import LOGO_URL from './logo.svg';
import { Image } from '../../lib/image';
import Rotate from '../../lib/Rotate';
import useAnimationFrame from '../../hooks/useAnimationFrame';

function Logo(): JSX.Element | null {
  const [angle, setAngle] = useState(0);
  const [source, setSource] = useState<null | HTMLImageElement>(null);

  useEffect(() => {
    fetchImage(LOGO_URL).then(setSource);
  }, []);

  useAnimationFrame(() => setAngle((angle) => angle + 0.001));

  if (!source) return null;

  return (
    <Rotate angle={angle}>
      <Image source={source} />
    </Rotate>
  );
}

export default Logo;
