import Timeout from "./Timeout.js";

export default class Slide {
  container: Element;
  slides: Element[];
  controls: Element;
  time: number;
  index: number;
  slide: Element;
  timeout: Timeout | null;
  paused: boolean;
  pausedTimeout: Timeout | null;

  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000,
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;
    this.timeout = null;
    this.pausedTimeout = null;
    this.index = 0;
    this.slide = this.slides[this.index];
    this.paused = false;

    this.init();
  }
  hide(el: Element) {
    el.classList.remove("active");
  }
  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];
    this.slides.forEach((el) => el.classList.remove("active"));
    this.slide.classList.add("active");
    this.auto(this.time);
  }
  auto(time: number) {
    if (this.paused) return;
    this.timeout?.clear();
    this.timeout = new Timeout(() => this.next(), time);
  }

  prev() {
    if (this.paused) return;
    const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
    this.show(prev);
  }

  next() {
    const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
    this.show(next);
  }
  pause() {
    console.log("pause");
    this.pausedTimeout = new Timeout(() => {
      this.paused = true;
    }, 300);
  }
  continue() {
    console.log("continue");
    this.pausedTimeout?.clear();
    if (this.paused) {
      this.paused = false;
      this.auto(this.time);
    }
  }

  private addControls() {
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");
    prevButton.innerText = "Previous Slide";
    nextButton.innerText = "Next Slide";
    this.controls.appendChild(prevButton);
    this.controls.appendChild(nextButton);
    this.controls.addEventListener("pointerdown", () => this.pause());
    this.controls.addEventListener("pointerup", () => this.continue());
    prevButton.addEventListener("pointerup", () => this.prev());
    nextButton.addEventListener("pointerup", () => this.next());
  }
  private init() {
    this.addControls();
    this.show(this.index);
  }
}
