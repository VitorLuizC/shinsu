const Context = CanvasRenderingContext2D.prototype;

if (process.env.NODE_ENV !== 'production') {
  Object.keys(Context).forEach((key) => {
    const descriptor = Object.getOwnPropertyDescriptor(Context, key);
  
    // Logs context's method calls.
    if (typeof descriptor?.value === 'function') {
      Object.defineProperty(Context, key, {
        ...descriptor,
        value: function () {
          console.log(`context.${key}(${Array.from(arguments, (value) => JSON.stringify(value)).join(', ')})`);
          return descriptor.value.apply(this, arguments);
        },
      });
    }
  
    // Logs context's attribute assignments.
    if (descriptor?.set) {
      Object.defineProperty(Context, key, {
        ...descriptor,
        set(value) {
          console.log(`context.${key} = ${JSON.stringify(value)}`);
          descriptor.set!.call(this, value);
        },
      });
    }
  });
}

export {};