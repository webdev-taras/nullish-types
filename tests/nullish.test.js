const { test } = require('node:test')
const { ok, equal, notEqual, throws } = require('node:assert/strict')

const { nullish, Nullish } = require('../src')

test('nullish operator does\'t work', t => {
  notEqual(nullish ?? 100, 100)
  notEqual(nullish || 100, 100)
  notEqual(!!nullish, false)
  notEqual(nullish, undefined)
  notEqual(nullish, null)
})

test('nullish instanceof Nullish', t => {
  ok(nullish instanceof Nullish)
})

test('nullish not instanceof Object', t => {
  ok(!(nullish instanceof Object))
})

test('Nullish() === nullish', t => {
  equal(Nullish(), nullish)
})

test('new Nullish() throws error', t => {
  throws(
    () => new Nullish(),
    {
      name: 'TypeError',
      message: 'Abstract class Nullish not directly constructable',
    },
  )
})

test('all nullish props === undefined', t => {
  nullish.blablabla = 'blablabla'
  equal(nullish.blablabla, undefined)
  equal(nullish?.foo?.bar, undefined)
})

test('all Nullish.prototype props !== undefined', t => {
  notEqual(nullish.toJSON, undefined)
  equal(nullish.toJSON(), undefined)
})

test('nullish prototype chain', t => {
  proto1 = Object.getPrototypeOf(nullish)
  proto2 = Object.getPrototypeOf(proto1)
  equal(nullish.constructor, Nullish)
  equal(proto1.constructor, Nullish)
  equal(proto2, null)
})

test('nullish as primitive', t => {
  equal(`${nullish}`, 'undefined') // as string
  equal(+nullish, NaN) // as number
  equal(nullish + '...', 'undefined...') // as primitive
  equal('...' + nullish, '...undefined') // string + value
  equal(2 + nullish, NaN) // number + value
  equal(Object.prototype.toString.call(nullish), '[object Nullish]')
})

test('JSON representation', t => {
  equal(JSON.stringify(nullish), JSON.stringify(undefined))
  equal(JSON.stringify(nullish), undefined)
  equal(JSON.stringify({ name: undefined, id: 1 }), '{"id":1}')
  equal(JSON.stringify({ name: nullish, id: 1 }), '{"id":1}')
})
