# 19 高级类型 — 索引类型


```ts
let obj = {
  a: 1,
  b: 2,
  c: 3
}

// function getValues(obj: any, keys: string[]) {
//   return keys.map(key => obj[key])
// }

// console.log(getValues(obj, ['a', 'b']))

// console.log(getValues(obj, ['e', 'f']))

// keyof T

interface Obj {
  a: number,
  b: string
}

let key: keyof Obj

// T[K]
let value: Obj['a']

// T extends U


function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}

console.log(getValues(obj, ['a', 'b']))

// console.log(getValues(obj, ['e', 'f']))  // err
```