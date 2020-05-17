# 20 高级类型 — 映射类型


```ts
interface Obj {
  a: string
  b: number
  c: boolean
}

// 同态
type ReadonlyObj = Readonly<Obj>  // 只读

type PartialObj = Partial<Obj>  // 可选

type PickObj = Pick<Obj, 'a' | 'b'>   // 抽取属性


// 非同态
type RecordObj = Record<'x' | 'y', Obj>
```
