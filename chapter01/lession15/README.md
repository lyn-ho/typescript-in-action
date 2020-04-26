# 类型检查机制 — 类型推断


类型检查机制：

TypeScript 编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为。

作用：辅助开发，提高开发效率


* 类型推断
* 类型兼容性
* 类型保护

```ts
let a = 1
let b = ['']

let c = (x = 1) => x + 1


interface Foo {
  bar: number
}

// let foo = {} as Foo

let foo: Foo = {
  bar: 1
}
foo.bar = 1
```

