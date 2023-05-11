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