# 强类型与弱类型

## 强类型

> 在强类型语言中，当一个对象从调用函数传递到被调用函数时，其类型必须与被调用函数中声明的类型兼容
> — Liskov, Zilles 1974

```
A() {
  B(x)
}

B(y) {
  // y 可以被赋值 x，程序运行良好
}
```


> 强类型语言：不允许改变变量的数据类型，除非进行强制类型转换

```java
class C {
  public static void main(String[] args) {
    int x = 1;
    boolean y = true;
    // x = y;  // error
  }
}
```


> 弱类型语言：变量可以被赋予不同的数据类型

```js
let x = 1
let y = true
x = y
```



