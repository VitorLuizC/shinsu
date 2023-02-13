class Radian {
  static DEGREE = (2 * Math.PI / 360);

  static fromDegree(value: number): number {
    return value * this.DEGREE;
  }
}

export default Radian;
