import type { ComponentProps } from 'react';
import { Animation } from 'lib/animation';
import { Canvas } from 'lib/canvas';

type Props = ComponentProps<typeof Canvas> & ComponentProps<typeof Animation>;

function Renderer(props: Props) {
  const {
    width,
    height,
    children,
    framesPerSecond,
  } = props;

  return (
    <Canvas width={width} height={height}>
      <Animation framesPerSecond={framesPerSecond}>
        {children}
      </Animation>
    </Canvas>
  );
}

export default Renderer;
