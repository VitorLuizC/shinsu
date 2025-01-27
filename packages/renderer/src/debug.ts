type AnyFunction = (this: any, ...args: any[]) => any

function debug<F extends AnyFunction>(impl: F): F {
  return function () {
    console.group(`ℹ️ @shinsu/renderer debug ${impl.name ?? 'anonymous'}`)
    console.log('this:', this)
    console.log('arguments:', arguments)
    const result = impl.apply(this, arguments as any as Parameters<F>)
    console.log('return:', result)
    console.groupEnd()
    return result
  } as F
}

export default debug
