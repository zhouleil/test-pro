const expect = require('chai').expect

describe('beforeEach 示例', () => {
  let foo = false

  beforeEach(() => {
    foo = true
  })

  it('修改全局变量应该成功', () => {
    expect(foo).to.be.equal(true)
  })
})