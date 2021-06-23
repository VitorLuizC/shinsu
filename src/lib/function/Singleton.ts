import type AnyFunction from './AnyFunction';

type Singleton<F extends AnyFunction> = (...args: Parameters<F>) => ReturnType<F>;

export default Singleton;
