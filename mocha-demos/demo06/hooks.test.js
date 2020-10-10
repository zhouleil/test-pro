const expect = require('chai').expect

describe('hooks 示例', () => {

  let num = 1

  before(() => {
    // 在本区块的所有测试用例之前执行,调用一次
    num++
    console.log('before', num)
  })

  after(() => {
    // 在本区块的所有测试用例之后执行，调用一次
  })

  beforeEach(() => {
    // 在本区块的每个测试用例之前执行，可调用多次
    num++
    console.log('beforeEach', num)
  })

  afterEach(() => {
    // 在本区块的每个测试用例之后执行，可调用多次
  })

  // test cases

  it('n 应该等于 3', () => {
    expect(num).to.be.equal(3)
  })

  it('n 应该等于 4', () => {
    expect(num).to.be.equal(4)
  })

})

