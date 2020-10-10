const expect = require('chai').expect

describe('Hook 示例', () => {
  let foo = false

  beforeEach(done => {
    const f = () => {
      foo = true
      done()
    }
    setTimeout(f, 50)
  })

  it('全局变量异步修改应该成功', () => {
    expect(foo).to.be.equal(true)
  })
})