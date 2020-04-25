# 对象类型接口


```ts
interface List {
  readonly id: number
  name: string
  age?: number
}

// interface List {
//   id: number
//   name: string
//   [x: string]: any
// }

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }

    // value.id++  // error
  })
}

let result = {
  data: [
    {id: 1, name: 'a', sex: 'male'},
    {id: 2, name: 'b', age: 18},
  ]
}

render(result)

// render({
//   data: [
//     { id: 1, name: 'a', sex: 'male' },  // error
//     { id: 2, name: 'b' },
//   ]
// })

// render({
//   data: [
//     { id: 1, name: 'a', sex: 'male' },
//     { id: 2, name: 'b' },
//   ]
// } as Result)  // 类型断言

// render(<Result>{
//   data: [
//     { id: 1, name: 'a', sex: 'male' },
//     { id: 2, name: 'b' },
//   ]
// })  // 类型断言

interface StringArray {
  [index: number]: string
}

let chars: StringArray = ['a', 'b']

interface Names {
  [x: string]: string
  // y: number // error
  [z: number]: string
}

interface Demos {
  [x: string]: string
  // [z: number]: number // error
}

interface Foo {
  [x: string]: any
  [z: number]: number
}
```