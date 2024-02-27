const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { Null, Nullish } = require('../src')

test('null instanceof Null', t => {
  ok(null instanceof Null)
})

test('null instanceof Nullish', t => {
  ok(null instanceof Nullish)
})

test('null not instanceof Object', t => {
  ok(!(null instanceof Object))
})

test('Null() === null', t => {
  equal(Null(), null)
})

test('new Null() throws error', t => {
  throws(
    () => new Null(),
    {
      name: 'TypeError',
      message: 'Null is not a constructor',
    },
  )
})

test('null prototype chain', t => {
  throws(
    () => Object.getPrototypeOf(null),
    {
      name: 'TypeError',
      message: 'Cannot convert undefined or null to object',
    },
  )
  proto1 = Null.prototype
  proto2 = Object.getPrototypeOf(proto1)
  proto3 = Object.getPrototypeOf(proto2)
  equal(proto1.constructor, Null)
  equal(proto2.constructor, Nullish)
  equal(proto3, null)
})
