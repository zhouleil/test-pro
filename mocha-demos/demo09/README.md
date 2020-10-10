Mocha支持从测试用例生成规格文件。

进入`demo09`子目录，运行下面的命令。

```bash
$ mocha --recursive -R markdown > spec.md
```

上面命令根据`test`目录的所有测试脚本，生成一个规格文件`spec.md`。`-R markdown`参数指定规格报告是`markdown`格式。

如果想生成`HTML`格式的报告`spec.html`，使用下面的命令。

```bash
$ mocha --recursive -R doc > spec.html
```