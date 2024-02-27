const { test } = require('node:test')
const { ok, equal, throws } = require('node:assert/strict')

const { Undefined, Nullish } = require('../src')

test('undefined instanceof Undefined', t => {
  ok(undefined instanceof Undefined)
})

test('undefined instanceof Nullish', t => {
  ok(undefined instanceof Nullish)
})

test('undefined not instanceof Object', t => {
  ok(!(undefined instanceof Object))
})

test('Undefined() === undefined', t => {
  equal(Undefined(), undefined)
})

test('new Undefined() throws error', t => {
  throws(
    () => new Undefined(),
    {
      name: 'TypeError',
      message: 'Undefined is not a constructor',
    },
  )
})

test('undefined prototype chain', t => {
  throws(
    () => Object.getPrototypeOf(undefined),
    {
      name: 'TypeError',
      message: 'Cannot convert undefined or null to object',
    },
  )
  proto1 = Undefined.prototype
  proto2 = Object.getPrototypeOf(proto1)
  proto3 = Object.getPrototypeOf(proto2)
  equal(proto1.constructor, Undefined)
  equal(proto2.constructor, Nullish)
  equal(proto3, null)
})
