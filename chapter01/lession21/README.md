# 21 高级类型 — 条件类型
#typescript/TypeScript开发实战

```ts
// T extends U ? X : Y

type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' : 'object'

type T1 = TypeName<string>  // type T1 = 'string'
type T2 = TypeName<string []>   // type T2 = 'object'


// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>  // type T4 = 'b' | 'c'

// Diff<'a',  'a' | 'e'> | Diff<'b',  'a' | 'e'> | Diff<'c',  'a' | 'e'>
// never | 'b' | 'c'
// 'b' | 'c'

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>   // type T5 = string | number

// Exclude<T, U>
// NonNullable<T>
// Extract<T, U>
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>   // type T6 = 'a'

// ReturnType<T>
type T7 = ReturnType<() => string>  // type T7 = string
```