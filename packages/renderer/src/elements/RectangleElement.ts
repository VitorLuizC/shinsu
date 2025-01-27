import type { Attributes } from 'react'
import { Element } from './models/Element'

export interface RectangleElementProps extends Attributes {
  positionX: number
  positionY: number
  width: number
  height: number
}

export class RectangleElement extends Element<RectangleElementProps> {
  static type = 'rectangle' as const

  render(context: CanvasRenderingContext2D) {
    context.beginPath()
    context.rect(this.props.positionX, this.props.positionY, this.props.width, this.props.height)
    context.fill() // ?
    context.closePath()
  }
}
