import { Circle, Line } from 'lib/shape';
import { Rotate } from 'lib/transform';

type Props = {
  time: Date;
};

function SecondPointer({ time }: Props): JSX.Element {
  const color = '#d40000';

  const rotation = (time.getSeconds() * Math.PI) / 30;

  return (
    <Rotate rotation={rotation}>
      <Line
        cap="round"
        toX={83}
        width={6}
        positionX={-30}
        strokeColor={color}
      />
      <Circle size={20} positionX={95} strokeColor={color} strokeWidth={6} />
      <Circle size={6} fillColor={color} />
    </Rotate>
  );
}

export default SecondPointer;
