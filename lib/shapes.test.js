// import { Circle, Triangle, Square } from './shapes.js';


class Shape {
  constructor(shapeColor) {
      this.color = shapeColor
  }
}
class Circle extends Shape {
  makeShape() {
      return `<circle cx="150" cy="100" r="50" fill='${this.color}'/>`
  }
}
class Triangle extends Shape {
  makeShape() {
      return `<polygon points="150,40 85,150 215,150" fill='${this.color}' class="triangle" />`
  }
}
class Square extends Shape {
  makeShape() {
      return `<rect x="100" y="50" width="100" height="100" fill='${this.color}'/>`
  }
}

describe('Shapes', () => {
    describe('makeShape', () => {
      it('should return a properly colored circle', () => {
        const circle = new Circle('red');
        expect(circle.makeShape()).toEqual(`<circle cx="150" cy="100" r="50" fill='red'/>`);
      });
    });
  });
describe('Shapes', () => {
    describe('makeShape', () => {
      it('should return a properly colored square', () => {
        const square = new Square('green');
        expect(square.makeShape()).toEqual(`<rect x="100" y="50" width="100" height="100" fill='green'/>`);
      });
    });
  });
describe('Shapes', () => {
    describe('makeShape', () => {
      it('should return a properly colored triangle', () => {
        const triangle = new Triangle('blue');
        expect(triangle.makeShape()).toEqual(`<polygon points="150,40 85,150 215,150" fill='blue' class="triangle" />`);
      });
    });
  });