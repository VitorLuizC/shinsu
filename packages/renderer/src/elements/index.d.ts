import type { Attributes, ReactNode } from 'react'
import { RotateElement, type RotateElementProps } from './RotateElement'
import { RectangleElement, type RectangleElementProps } from './RectangleElement'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [RotateElement.type]: RotateElementProps
      [RectangleElement.type]: RectangleElementProps
    }
  }
}
