class Polygon {
  constructor (array_of_numbers) {
    this.sidesArray = array_of_numbers
    this.sides = this.getCount
  }

  get getCount() {
    return this.sidesArray.length
  }

  get perimeter() {
    let perimeter = 0
    this.sidesArray.forEach((side) => {
      perimeter += side
    })
    return perimeter
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [a,b,c] = this.sidesArray
    if ((a+b>c) && (b+c>a) && (c+a>b)) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    const [a,b,c,d] = this.sidesArray
    if (a===b && b===c && c===d) {
      return true
    } else {
      return false
    }
  }

  get area () {
    const a = this.sidesArray[0]
    return a**2
  }
}
