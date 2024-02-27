const { Nullish } = require('./nullish')

function Undefined() {
  if (new.target) {
    throw TypeError('Undefined is not a constructor')
  }
  return void 0
}
Object.setPrototypeOf(Undefined.prototype, Nullish.prototype)

Object.defineProperty(Undefined, Symbol.hasInstance, {
  value(instance) {
    return instance === undefined
  },
})

module.exports = { Undefined }
