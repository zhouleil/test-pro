const fetch = require('node-fetch')
const expect = require('chai').expect

describe('promise.test.js - 异步测试', () => {
  it('异步请求应该返回一个对象', () => {
    return fetch('https://api.github.com')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        expect(json).to.be.an('object')
      })
  })
})