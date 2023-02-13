function createCanvasContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const context = canvas.getContext('2d', {
    alpha: true,
    desynchronized: false,
  });

  if (!context)
    throw new Error('Couldn\'t get canvas\' context.');

  return context;
}

export default createCanvasContext;
