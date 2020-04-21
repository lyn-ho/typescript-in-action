# 静态类型与动态类型


> 静态类型语言：在编译阶段确定所有变量的类型

> 动态类型语言：在执行阶段确定所有变量的类型


**JavaScript**

* 在程序运行时，动态计算属性偏移量
* 需要额外的空间存储属姓名
* 所有对象的偏移量信息各存一份

```js
class C {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

function add(a, b) {
  return a.x + a.y + b.x + b.y
}
```


**C++**

* 编译阶段确定属性偏移量
* 用偏移量访问代替属姓名访问
* 偏移量信息共享

```cpp
class C {
  public:
    int x;
    int y;
}

int add(C a, C b) {
  return a.x + a.y + b.x + b.y
}
```


**对比**

* 静态类型
	* 对类型极度严格
	* 立即发现错误
	* 运行时性能好
	* 自文档化

* 动态类型
	* 对类型非常宽松
	* Bug 可能隐藏
	* 运行时性能差
	* 可读性差


**动态类型语言支持者认为：**

* 性能是可以改善的（V8 引擎），而语言的灵活性更重要
* 隐藏的错误可以通过单元测试发现
* 文档可以通过工具生成


![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge1sc5ak09j31en0rzwle.jpg)

