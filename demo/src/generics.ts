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


