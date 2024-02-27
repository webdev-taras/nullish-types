
const { Nullish } = require('./nullish')

function Null() {
  if (new.target) {
    throw TypeError('Null is not a constructor')
  }
  return null
}
Object.setPrototypeOf(Null.prototype, Nullish.prototype)

Object.defineProperty(Null, Symbol.hasInstance, {
  value(instance) {
    return instance === null
  },
})

// Null.prototype[Symbol.toStringTag] = 'Null'
// Null.prototype[Symbol.toPrimitive] = function (hint) {
//   return null
// }
// Null.prototype.toString = function() { return 'null' }
// Null.prototype.toJSON = () => { return 'null' }

module.exports = { Null }
