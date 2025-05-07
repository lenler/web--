class Parent {
    sayHi() {
      console.log('我是父类');
    }
  }
  class Child extends Parent {
    sayHi() {
      super.sayHi(); // 调用父类方法
      console.log('我是子类'); // 扩展自己的逻辑
    }
  }
  const c = new Child();
  c.sayHi();
  // 输出：
  // 我是父类
  // 我是子类

  //父类里的 sayHi 方法逻辑是不会被子类重写影响的！你在子类里重写 sayHi，只是覆盖了子类实例调用时的行为，父类本身的方法内容不会变。如果你用 super.sayHi()，就是调用父类原本的逻辑；如果不用 super，父类的 sayHi 依然保持原样，其他用父类的地方还是会按原来的逻辑执行。这样设计就是为了让子类可以自由扩展，而不影响父类的稳定性～

  //在 JavaScript 里，子类如果想重写父类的方法，直接在子类里用同名方法重新写一遍就行，不需要像 Java 那样加 @Override 注解。JS 的 class 机制会自动用子类的方法覆盖父类的同名方法。你想调用父类原方法时，可以用 super.方法名() ，否则就是完全用自己的实现。这样写法更灵活，也更贴合 JS 的动态特性。