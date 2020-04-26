# 类与接口的关系


![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge7jo0lwioj31ae0j2wm1.jpg)

```ts
interface Human {
  name: string
  eat(): void
}

class Asian implements Human {
  constructor(public name: string) {
    this.name = name
  }

  eat() {}
}

interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {
}

let boy: Boy = {
  name: '',
  run() { },
  eat() { },
  cry() { }
}

class Auto {
  state = 1

  // private state2 = 0
}

interface AutoInterface extends Auto {
}

class C implements AutoInterface {
  state = 2
}

class Bus extends Auto implements AutoInterface {
}
```