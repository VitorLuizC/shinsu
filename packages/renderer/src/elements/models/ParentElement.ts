import { Element, ElementProps } from './Element'

export abstract class ParentElement<P extends ElementProps> extends Element<P> {
  children: Element<any>[] = []

  renderChildren(context: CanvasRenderingContext2D, delta: number) {
    for (const child of this.children) child.render(context, delta)
  }
}
