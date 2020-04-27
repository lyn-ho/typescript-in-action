interface IDog {
  run(): void
}

interface ICat {
  jump(): void
}

let pet: IDog & ICat = {
  run() { },
  jump() { },
}

class Dog implements IDog {
  run() { }
  eat() { }
}

class Cat implements ICat {
  jump() { }
  eat() { }
}

enum Master { Boy, Girl }

function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog() : new Cat()

  pet.eat()

  return pet
}

let aaa: number | string = 'a'
let bbb: 'a' | 'b' | 'c'
let ccc: 1 | 2 | 3


interface Square {
  kind: 'square',
  size: number
}

interface Rectangle {
  kind: 'rectangle',
  width: number
  height: number
}

interface Circle {
  kind: 'circle',
  r: number
}

type Shape = Square | Rectangle | Circle

function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.width * s.height
    case 'circle':
      return Math.PI * s.r ** 2
    default:
      return  ((e: never) => {throw new Error(e)})(s)
  }
}

area({kind: 'circle', r: 10})

