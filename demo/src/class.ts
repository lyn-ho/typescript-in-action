// abstract class Animal {
//   eat() {
//     console.log('eat')
//   }

//   abstract sleep(): void
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super()

//     this.name = name
//   }

//   public name: string

//   run() { }

//   sleep() {
//     console.log('dog sleep')
//   }

//   private pri() { }

//   protected pro() { }

//   readonly legs: number = 4

//   static food: string = 'bones'
// }

// console.log(Dog.prototype)

// let dog = new Dog('ww')

// console.log(dog)
// dog.eat()

// // dog.pri() // error
// // dog.pro() // error

// class Cat extends Animal {
//   constructor() {
//     super()
//   }

//   sleep() {
//     console.log('cat sleep')
//   }
// }

// let cat = new Cat()

// let animals: Animal[] = [dog, cat]

// animals.forEach(animal => animal.sleep())

// class Husky extends Dog {
//   constructor(name : string, public color: string) {
//     super(name)

//     this.color = color

//     // this.pri()  // error
//     this.pro()
//   }

//   // color: string
// }

// class WorkFlow {
//   step1() {
//     return this
//   }

//   step2() {
//     return this
//   }
// }

// new WorkFlow().step1().step2()

// class MyFlow extends WorkFlow {
//   next() {
//     return this
//   }
// }

// new MyFlow().next().step1().next().step2()
