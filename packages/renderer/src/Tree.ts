import { Element } from './elements/models/Element';

interface Animation {
  start()

}

function Animation() {
  let animationId;
}

export default class Tree {
  #context: CanvasRenderingContext2D;

  #element: HTMLCanvasElement;

  #children: Element<any>[] = [];

  constructor(element: HTMLCanvasElement) {
    this.#element = element;
    this.#context = Tree.#getContext(element);

    const run = () => {
      this.#context.clearRect(0, 0, this.#element.width, this.#element.height);
      this.render();
      requestAnimationFrame(run);
    }

    requestAnimationFrame(run);
  }

  appendChild(child: Element<any>) {
    this.#children.push(child);
  }

  render() {
    for (const child of this.#children) {
      child.render(this.#context);
    }
  }

  clear() {
    this.#context.clearRect(0, 0, this.#element.width, this.#element.height);
    this.#children.splice(0, this.#children.length);
  }

  static #getContext(element: HTMLCanvasElement): CanvasRenderingContext2D {
    const context = element.getContext('2d', {
      alpha: true,
      colorSpace: 'display-p3',
      desynchronized: false,
      willReadFrequently: false,
    });

    if (!context)
      throw new Error('Can\'t create the 2D rendering context used by Shinsu/Tree.');

    return context;
  }
}
