# ES6 testing

如果测试脚本是用 `ES6` 写的，那么运行测试之前，需要先用 `Babel` 转码。

`ES6` 转码，需要安装 `Babel`。

`
$ npm i -D @babel/core @babel/preset-env
`

然后，在项目目录下面，新建一个 `babel.config.json`配置文件。

```js

{
  "presets": [
    [
      "@babel/preset-env"
    ]
  ]
}

```

最后，使用 --require 参数指定测试脚本的转码器

```bash
$ ../node_modules/mocha/bin/mocha --require @babel/register --recursive


  加法函数的测试
    √ 1 加 1 应该等于2
    √ 任何数加0应该等于自身

  乘法函数的测试
    √ 4 乘 5 应该等于 20
    √ 0 乘 5应该等于 0


  4 passing (6ms)


```

由于这里的转码器安装在项目内，所以要使用项目内安装的Mocha；如果转码器安装在全局，就可以使用全局的Mocha。

注意，Babel默认不会对Iterator、Generator、Promise、Map、Set等全局对象，以及一些全局对象的方法（比如Object.assign）转码。如果你想要对这些对象转码，就要安装babel-polyfill。

```sh
$ npm install babel-polyfill --save
```

然后，在你的脚本头部加上一行。

```js
import 'babel-polyfill'
```