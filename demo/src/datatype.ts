//
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

//
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = [1, 2, 'a']

//
let tuple: [number, string] = [1, '1']

//
// let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number

compute = (a, b) => a - b

//
// let obj: object = { x: 1, y: 2 }
let obj: {x:number, y: number} = { x: 1, y: 2 }

//
let s1: symbol = Symbol()
let s2 = Symbol()

//
let un: undefined = undefined
let nu: null = null

// void
let noReturn = () => { }

// any
let x

// never
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}

