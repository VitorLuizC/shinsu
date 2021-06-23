import type AnyFunction from './AnyFunction';

type IdentityOf<F extends AnyFunction> = (...args: Parameters<F>) => ReturnType<F>;

export default IdentityOf;
