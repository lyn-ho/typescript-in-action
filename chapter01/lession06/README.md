# 枚举类型


> 一组有名字的常量集合

反向映射实现

* 数字枚举

```ts
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}
```

```js
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));
```

* 字符串枚举

```ts
enum Message {
  Success ='成功了',
  Fail = '失败了'
}
```

```js
var Message;
(function (Message) {
    Message["Success"] = "\u6210\u529F\u4E86";
    Message["Fail"] = "\u5931\u8D25\u4E86";
})(Message || (Message = {}));
```


* 异构枚举

```ts
enum Answer {
  N,
  Y = 'yes'
}
```

```js
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
```

* 枚举成员

```ts
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = '123'.length,
	f = 4
}
```

```js
var Char;
(function (Char) {
    // const
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    // computed
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    Char[Char["f"] = 4] = "f";
})(Char || (Char = {}))
```

* 常量枚举

```ts
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]
```

```js
let month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */]
```

不需要一个对象，而需要一个对象的值的时候，使用常量枚举，减少编译后的代码


* 枚举类型

```ts
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3
// e === f

let e1: E.a = 2
let e2: E.b
// e1 === e2
let e3: E.a = 3
e1 === e3

let g1: G
let g2: G.a
```


























