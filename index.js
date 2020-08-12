class Polygon {
  constructor(array) {
    this.array = array
  }

  get countSides() {
    return this.array.length
  }

  get perimeter() {
    return this.array.reduce((memo, side ) => {
      return memo + side;
    })
  }
}
class Triangle extends Polygon {
  get isValid() {
    if((this.array[1] + this.array[2]) > this.array[0]) {
      return true
    } else {
      return false
    }
  }
}
