import { Line } from 'lib/shape';
import { Rotate } from 'lib/transform';
import { Radian } from 'lib/unit';

type Props = {
  hour: number;
};

function HourMark({ hour }: Props): JSX.Element {
  return (
    <Rotate rotation={Radian.fromDegree(30 * hour)}>
      <Line
        cap="round"
        width={8}
        toX={120}
        positionX={100}
        strokeColor="#000000"
      />
    </Rotate>
  );
}

export default HourMark;
