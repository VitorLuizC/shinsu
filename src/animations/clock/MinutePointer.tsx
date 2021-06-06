import { Line } from 'lib/shape';
import { Rotate } from 'lib/transform';

type Props = {
  time: Date;
};

function MinutePointer({ time }: Props): JSX.Element {
  const rotation = (
    (Math.PI / 30) * time.getMinutes() +
    (Math.PI / 30 / 60) * time.getSeconds()
  );

  return (
    <Rotate rotation={rotation}>
      <Line
        cap="round"
        toX={112}
        width={10}
        positionX={-28}
        strokeColor="#000000"
      />
    </Rotate>
  );
}

export default MinutePointer;
