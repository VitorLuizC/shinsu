import { ReactNode } from 'react'
import ReactReconciler from 'react-reconciler'
import { DefaultEventPriority, ConcurrentRoot } from 'react-reconciler/constants'
import debug from './debug'
import { RectangleElement } from './elements/RectangleElement'
import { RotateElement } from './elements/RotateElement'
import { ParentElement } from './elements/models/ParentElement'
import { Element } from './elements/models/Element'
import Tree from './Tree'

type RootHostContext = {
  __type: 'RootHostContext'
}

type HostContext = {
  __type: 'RootHostContext' | 'ChildHostContext'
}

type EventPriority = number

function getHostConfig() {
  let currentEventPriority: EventPriority = DefaultEventPriority

  const contexts = new WeakMap<HTMLCanvasElement, RootHostContext>()

  return {
    supportsMutation: true,
    supportsPersistence: false,

    // ..:: Host Context ::..

    getChildHostContext: (): HostContext => {
      return {
        __type: 'ChildHostContext',
      }
    },

    getRootHostContext: (container: HTMLCanvasElement): HostContext => {
      let context = contexts.get(container)

      if (!context) {
        context = {
          __type: 'RootHostContext',
        }

        contexts.set(container, context)
      }

      return context
    },

    // ..:: Priority ::..

    resolveUpdatePriority: () => {
      // TODO: Resolve the update priority based on the current event in order
      //       to corrently batch updates and improve UX.
      return currentEventPriority
    },
    getCurrentUpdatePriority: () => currentEventPriority,
    setCurrentUpdatePriority: (newEventPriority: EventPriority) => {
      currentEventPriority = newEventPriority
    },

    // ..:: Commit ::..

    commitUpdate: debug(<P extends object>(
      instance: Element<P>,
      _type: string,
      _previousProps: P,
      updatedProps: P
    ) => {
      instance.update(updatedProps)
    }),

    prepareForCommit: () => void 0,
    resetAfterCommit: () => void 0,
    maySuspendCommit: (type: string) => {
      // TODO: Check if element is an image, a video or an audio. Maybe check
      //       for fonts too.
      if (type === 'resource') return true

      return false
    },

    /** Checks if element must text content. */
    shouldSetTextContent: () => false,

    /** Creates an instance for each element type. */
    createInstance: (type: string, props: any) => {
      switch (type) {
        case RectangleElement.type:
          return new RectangleElement(props)
        case RotateElement.type:
          return new RotateElement(props)
        default:
          throw new Error(`Unknown element type "${type}"`)
      }
    },

    /** Do aditional work after the instance is created. */
    finalizeInitialChildren: () => false,
    appendChild: (parent: ParentElement<any>, child: Element<any>) => void parent.children.push(child),
    appendInitialChild: (parent: ParentElement<any>, child: Element<any>) => void parent.children.push(child),

    // ..:: Container ::..

    clearContainer: (tree: Tree) => tree.clear(),
    appendChildToContainer: (tree: Tree, child: Element<any>) => tree.appendChild(child),
  }
}

const containers = new WeakMap<HTMLCanvasElement, unknown>()

function handleError(error: unknown, info: unknown) {
  console.group('🚩 @shinsu/renderer error')
  console.log('error:', error)
  console.log('info:', info)
  console.groupEnd()
}

export default {
  render(node: ReactNode, element: HTMLCanvasElement) {
    const reconciler = ReactReconciler(getHostConfig())

    let container = containers.get(element)

    if (!container) {
      // @ts-expect-error because 'reconciler' types aren't available.
      container = reconciler.createContainer(
        new Tree(element),
        ConcurrentRoot,
        null, // We don't support SSR, so no hydration callbacks.
        true, // Strict mode is enabled.
        null, // 'concurrentUpdatesByDefaultOverride' is outdated?
        'shinsu', // The identifier prefix.
        handleError, // Uncaught error handler.
        handleError, // Caught error handler.
        handleError, // Recoverable error handler.
        null, // I don't know how we gonna support transition callbacks.
      )

      containers.set(element, container)
    }

    // @ts-expect-error because 'reconciler' types aren't available.
    reconciler.updateContainer(node, container, null, () => void 0)
  },
}
