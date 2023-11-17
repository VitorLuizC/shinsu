export type Options = {
  id: string;
  width: number;
  height: number;
  className: string;
};

function createCanvas(options: Options): HTMLCanvasElement {
  const { id, width, height, className } = options

  const canvas = window.document.createElement('canvas');

  canvas.setAttribute('id', id);
  canvas.setAttribute('width', width.toString(10));
  canvas.setAttribute('height', height.toString(10));

  canvas.classList.add(className);

  return canvas;
}

export default createCanvas;
