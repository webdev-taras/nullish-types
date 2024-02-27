const { test } = require('node:test')
const { ok, equal, notEqual } = require('node:assert/strict')

const { none, None, Nullish } = require('../src')

test('nullish operator does\'t work', t => {
  notEqual(none ?? 100, 100)
  notEqual(none || 100, 100)
  notEqual(!!none, false)
  notEqual(none, undefined)
  notEqual(none, null)
})

test('none instanceof None', t => {
  ok(none instanceof None)
})

test('none instanceof Nullish', t => {
  ok(none instanceof Nullish)
})

test('none not instanceof Object', t => {
  ok(!(none instanceof Object))
})

test('None() === none', t => {
  equal(None(), none)
})

test('new None() === none', t => {
  equal(new None(), none)
  equal(new None(), new None())
})

test('all none props === none', t => {
  none.blablabla = 'blablabla'
  equal(none.blablabla, none)
  equal(none.blablabla[1].foo.bar, none)
  equal(none.none.blablabla, none)
  equal(none?.none?.blablabla, none)
})

test('all None.prototype props !== none', t => {
  notEqual(none.toJSON, none)
  equal(none.toJSON(), null)
})

test('none prototype chain', t => {
  proto1 = Object.getPrototypeOf(none)
  proto2 = Object.getPrototypeOf(proto1)
  proto3 = Object.getPrototypeOf(proto2)
  equal(none.constructor, None)
  equal(proto1.constructor, None)
  equal(proto2.constructor, Nullish)
  equal(proto3, null)
})

test('none as primitive', t => {
  equal(`${none}`, 'none') // as string
  equal(+none, NaN) // as number
  equal(none + '...', 'undefined...') // as primitive
  equal('...' + none, '...undefined') // string + value
  equal(2 + none, NaN) // number + value
  equal(Object.prototype.toString.call(none), '[object None]')
})

test('JSON representation', t => {
  equal(JSON.stringify(none), JSON.stringify(null))
  equal(JSON.stringify(none), 'null')
  const reviver = (key, value) => (value === null) ? new None() : value
  equal(JSON.parse('null'), null)
  equal(JSON.parse('null', reviver), none)
})
