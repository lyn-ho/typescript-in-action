# 类型检查机制 — 类型兼容性



当一个类型 Y 可以被赋值给另一个类型 X 时，我们就可以说类型 X 兼容类型 Y

X 兼容 Y： X（目标类型） = Y（源类型）

```ts
// 接口兼容性
interface X {
  a: any
  b: any
}

interface Y {
  a: any
  b: any
  c: any
}

let x: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }

x = y
// y = x //error


// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}

// 1. 参数个数 目标函数参数个数多余源函数的参数个数
let handler1 = (a: number) => { }
hof(handler1)

let handler2 = (a: number, b: number, c: number) => { }
// hof(handler2) // error


// 可选参数和剩余参数

let a = (p1: number, p2: number) => { }
let b = (p1?: number, p2?: number) => { }
let c = (...args: number[]) => { }

// 固定参数可以兼容可选参数和剩余参数
a = b
a = c

// 可选参数不兼容固定参数和剩余参数 (strictFunctionTypes: false)
// b = a // error
// b = c // error

// 剩余参数兼容固定参数和可选参数
c = a
c = b


// 参数类型必需匹配 双向协变

let handler3 = (a: string) => { }
// hof(handler3) // error


interface Point3D {
  x: number
  y: number
  z: number
}

interface Point2D {
  x: number
  y: number
}

let p3d = (point: Point3D) => { }
let p2d = (point: Point2D) => { }

p3d = p2d
// p2d = p3d // error


// 返回值类型 目标函数的返回值类型必须与源函数的返回值类型相同或子类型 （双向协变）

let f = () => ({ name: 'a' })
let g = () => ({ name: 'b', age: 18 })
f = g
// g = f // error


// 函数重载

function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any { }


// 枚举兼容性 枚举之间完全不兼容
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple  // error


// 类兼容性 只比较结构（静态成员和构造函数不参与比较，实例成员比较）
class A {
  constructor(p: number, q: number) { }
  id: number = 1
  private name: string = ''
}

class B {
  static s = 1
  constructor(p: number) { }
  id: number = 2
  private name: string = ‘’
}

let aa = new A(1, 2)
let bb = new B(1)
// aa = bb
// bb = aa  // private => error

class C extends A { }

let cc = new C(1, 2)
aa = cc
cc = aa


// 泛型兼容性
interface Empty<T> { }
// interface Empty<T> {
//   value: T // 使用 T 导致不兼容
// }

let obj1: Empty<number> = {}
let obj2: Empty<string> = {}
obj1 = obj2


// 泛型函数
let log1 = <T>(x: T): T => {
  console.log(x)
  return x
}

let log2 = <U>(y: U): U => {
  console.log(y)
  return y
}

log1 = log2
```


Tips

结构之间兼容：成员少的兼容成员多的
函数之间兼容：参数多的兼容参数少的


