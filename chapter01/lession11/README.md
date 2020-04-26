# 类 — 抽象类与多态


```ts
abstract class Animal {
  eat() {
    console.log('eat')
  }

  abstract sleep(): void
}

class Dog extends Animal {
  constructor(name: string) {
    super()

    this.name = name
  }

  public name: string

  run() { }

  sleep() {
    console.log('dog sleep')
  }
}

let dog = new Dog('ww')

class Cat extends Animal {
  constructor() {
    super()
  }

  sleep() {
    console.log('cat sleep')
  }
}

let cat = new Cat()

let animals: Animal[] = [dog, cat]

animals.forEach(animal => animal.sleep())


class WorkFlow {
  step1() {
    return this
  }

  step2() {
    return this
  }
}

new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
  next() {
    return this
  }
}

new MyFlow().next().step1().next().step2()
```

