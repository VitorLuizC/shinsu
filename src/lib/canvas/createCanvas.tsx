export type Options = {
  id: string;
  width: number;
  height: number;
  className: string;
};

function createCanvas({ id, width, height, className }: Options): HTMLCanvasElement {
  const canvas = window.document.createElement('canvas');

  canvas.id = id;
  canvas.width = width;
  canvas.height = height;
  canvas.classList.add(className);

  return canvas;
}

export default createCanvas;
