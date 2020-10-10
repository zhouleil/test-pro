import multiply from '../../src/multiply'
import chai from 'chai'

const expect = chai.expect

describe('乘法函数的测试', () => {
  it('4 乘 5 应该等于 20', () => {
    expect(multiply(4, 5)).to.be.equal(20)
  })

  it('0 乘 5应该等于 0', () => {
    expect(multiply(0, 5)).to.be.equal(0)
  })
})