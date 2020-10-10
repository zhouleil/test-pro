# TOC
   - [加法函数的测试](#)
   - [乘法函数的测试](#)
<a name=""></a>
 
<a name=""></a>
# 加法函数的测试
1 加 1 应该等于2.

```js
expect(add(1, 1)).to.be.equal(2)
```

任何数加0应该等于自身.

```js
expect(add(1, 0)).to.be.equal(1)
```

<a name=""></a>
# 乘法函数的测试
4 乘 5 应该等于 20.

```js
expect(multiply(4, 5)).to.be.equal(20)
```

0 乘 5应该等于 0.

```js
expect(multiply(0, 5)).to.be.equal(0)
```

