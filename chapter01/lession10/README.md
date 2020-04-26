# 类 — 继承和修饰符

```ts
class Dog {
  constructor(name: string) {
    this.name = name
  }

  public name: string

  run() { }

  private pri() { }

  protected pro() { }

  readonly legs: number = 4

  static food: string = 'bones'
}

console.log(Dog.prototype)

let dog = new Dog('ww')

console.log(dog)

// dog.pri() // error
// dog.pro() // error

class Husky extends Dog {
  constructor(name : string, public color: string) {
    super(name)

    this.color = color

    // this.pri()  // error
    this.pro()
  }

  // color: string
}
```




