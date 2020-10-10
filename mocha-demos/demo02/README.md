# command parameters

Mocha 默认运行 `test` 子目录里边的测试脚本。所以，一般都会把测试脚本放在
`test` 目录里边，然后执行 `mocha` 就不需要参数了。

进入demo02目录，运行

```bash
$ mocha


  加法函数的测试
    √ 1 加 1 应该等于 2
    √ 任何数加0应该等于自身


  2 passing (3ms)

```

可以看到，`test`子目录里边的测试脚本执行了。但是 `test`子目录下边的 `test/dir` 子目录，里边还有一个测试脚本 `multiply.test.js`，没有得到执行。原来，
`Mocha`默认只执行 `test`子目录下面第一层的测试用例，不会执行更下层的用例。

为了改变这种行为，就必须加上 `--recursive` 参数，这时 `test`子目录下面所有的测试用例--不管在哪一层都会执行了

```bash
$ mocha --recursive


  加法函数的测试
    √ 1 加 1 应该等于 2
    √ 任何数加0应该等于自身

  乘法函数的测试
    √ 1 乘 1 应该等于 1


  3 passing (3ms)

```