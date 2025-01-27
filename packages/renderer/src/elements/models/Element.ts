import { Attributes } from 'react';

export interface ElementProps extends Attributes {
  onRender?: (delta: number) => void;
}

export abstract class Element<P extends ElementProps> {
  static type: string

  constructor(public props: P) {}

  abstract render(context: CanvasRenderingContext2D, delta: number): void

  update(props: P): void {
    this.props = props
  }
}
