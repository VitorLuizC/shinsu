import { Line } from 'lib/shape';
import { Rotate } from 'lib/transform';

type Props = {
  minute: number;
};

function MinuteMark({ minute }: Props): JSX.Element {
  return (
    <Rotate rotation={(Math.PI / 30) * minute}>
      <Line
        cap="round"
        toX={120}
        width={5}
        positionX={117}
        strokeColor="#000000"
      />
    </Rotate>
  );
}

export default MinuteMark;
