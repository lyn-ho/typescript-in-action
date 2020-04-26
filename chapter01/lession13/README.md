# 泛型 — 泛型函数和泛型接口

泛型

> 不预先确定的数据类型，具体的类型在使用的时候才能确定

```ts
function log<T>(value: T): T {
  console.log(value)
  return value
}

log<string[]>(['a', 'b'])

log(['a', 'b'])

// type Log = <T>(value: T) => T

// let myLog: Log = log

// interface Log {
//   <T>(value: T): T
// }

interface Log<T = string> {
  (value: T): T
}

let myLog: Log<number> = log

myLog(1)
```