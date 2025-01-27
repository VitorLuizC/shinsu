declare module 'react-reconciler' {
  function ReactReconciler(config: unknown): void

  export default ReactReconciler
}

declare module 'react-reconciler/constants' {
  export const DefaultEventPriority: number
  export const ConcurrentRoot: number
}
