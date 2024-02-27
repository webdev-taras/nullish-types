const nullist = require('./nullist')
const { Nullish } = require('./nullish')

// None {} -> as an alternative to null & undefined

const core = Object.freeze(Object.create(None.prototype))
const none = new Proxy(core, {
  get: (_, property) =>
    (core[property] == null) ? none : core[property]
})

function None() {
  return none
}
Object.setPrototypeOf(None.prototype, Nullish.prototype)

None.prototype[Symbol.toStringTag] = 'None'
None.prototype[Symbol.toPrimitive] = function (hint) {
  if (hint === 'number') {
    return NaN
  }
  if (hint === 'string') {
    return 'none'
  }
  return undefined
}

None.prototype.toJSON = () => null

nullist.push(none)

module.exports = { none, None }
