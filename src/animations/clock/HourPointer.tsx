import { Line } from 'lib/shape';
import { Rotate } from 'lib/transform';

function getHours(time: Date): number {
  const hours = time.getHours();
  if (hours < 12)
    return hours;
  return hours - 12;
}

type Props = {
  time: Date;
};

function HourPointer({ time }: Props): JSX.Element {
  const rotation = (
    (Math.PI / 6) * getHours(time) +
    (Math.PI / 6 / 60) * time.getMinutes() +
    (Math.PI / 6 / 60 / 60) * time.getSeconds()
  );

  return (
    <Rotate rotation={rotation}>
      <Line
        cap="round"
        toX={80}
        width={14}
        positionX={-20}
        strokeColor="#000000"
      />
    </Rotate>
  );
}

export default HourPointer;
