export type Options = {
  id: string;
  className: string;
};

function createCanvas({ id, className }: Options): HTMLCanvasElement {
  const canvas = window.document.createElement('canvas');

  canvas.id = id;

  canvas.classList.add(className);

  return canvas;
}

export default createCanvas;
