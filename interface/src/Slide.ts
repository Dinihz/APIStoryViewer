export default class Slide {
  container: Element;
  elements: Element[];
  controls: Element;
  time: number;
  constructor(
    container: Element,
    elements: Element[],
    controls: Element,
    time: number = 5000,
  ) {
    this.container = container;
    this.elements = elements;
    this.controls = controls;
    this.time = time;
  }
}
