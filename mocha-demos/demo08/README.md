# 浏览器测试

首先，使用 `mocha init` 命令在指定目录生成初始化文件。

```bash
$ mocha init demo08
```

运行上面命令，就会在`demo08`目录下生成`index.html`文件，以及配套的脚本和样式表。

然后，新建一个源码文件 `add.js`

然后，把这个文件，以及断言库`chai.js`，加入index.html。

```html
    <script src="mocha.js"></script>
    <script>
      mocha.setup('bdd');
    </script>
    <!-- 加入测试文件及断言库-->
    <script src="add.js"></script>
    <script src="http://chaijs.com/chai.js"></script>
    <!-- 加入测试文件及断言库end-->
    <script src="tests.spec.js"></script>
    <script>
      mocha.run();
    </script>
```

最后，在`tests.spec.js`里面写入测试脚本。