Mocha默认每个测试用例最多执行2000毫秒，如果到时没有得到结果，就报错。对于涉及异步操作的测试用例，这个时间往往是不够的，需要用-t或--timeout参数指定超时门槛。
 

对于 `timeout.test.js`, 运行下面命令可以看到测试通过

```bash
 $ mocha -t 5000 timeout.test.js
```

对于 `async.test.js`, 运行下面命令

```bash
 $ mocha -t 10000 timeout.test.js
```