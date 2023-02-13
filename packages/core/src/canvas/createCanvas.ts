export type Options = {
  id: string;
  width: number;
  height: number;
  className: string;
};

function createCanvas({ id, width, height, className }: Options): HTMLCanvasElement {
  const canvas = window.document.createElement('canvas');

  canvas.setAttribute('id', id);
  canvas.setAttribute('width', width.toString(10));
  canvas.setAttribute('height', height.toString(10));

  canvas.classList.add(className);

  return canvas;
}

export default createCanvas;
