const nullist = require('./nullist')

const nullish = Object.freeze(Object.create(Nullish.prototype))

function Nullish() {
  if (new.target?.name === 'Nullish') {
    throw TypeError('Abstract class Nullish not directly constructable')
  }
  return nullish
}
Object.setPrototypeOf(Nullish.prototype, null)

Object.defineProperty(Nullish, Symbol.hasInstance, {
  value(instance) {
    return nullist.includes(instance)
  },
})

Nullish.prototype[Symbol.toStringTag] = 'Nullish'
Nullish.prototype[Symbol.toPrimitive] = function (hint) {
  return undefined
}

Nullish.prototype.toJSON = () => undefined

nullist.push(nullish)

module.exports = { nullish, Nullish }
