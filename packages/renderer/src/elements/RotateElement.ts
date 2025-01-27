import type { Attributes, ReactNode } from 'react'
import { ParentElement } from './models/ParentElement'

export interface RotateElementProps extends Attributes {
  angle: number
  children?: ReactNode | undefined
}

export class RotateElement extends ParentElement<RotateElementProps> {
  static type = 'rotate' as const

  render(context: CanvasRenderingContext2D) {
    context.save()
    context.rotate(this.props.angle)

    this.renderChildren(context)

    context.restore()
  }
}
