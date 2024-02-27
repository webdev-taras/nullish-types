# nullish-types

This library provides a set of prototypes for nullish values.

The prototype chain is the following:
```text
- Nullish
  - Undefined
  - Null
  - None
```

So, to check if value is nullish you can do the next:

```javascript
<value> instanceof Nullish
```

## Nullish

The real prototype and constructor of `nullish` value:

```javascript
import { Nullish, nullish } from 'nullish-types'

Nullish() === nullish // true
nullish instanceof Nullish // true
```
The `nullish` value represents the generic empty value. It can be considered a better alternative to `undefined` value because `nullish` is a real object with a prototype. Therefore it is not falsy and is not equal to `undefined` but all its properties are undefined:

```javascript
nullish.blablabla === undefined // true
```

## Undefined

The fake prototype and producer of `undefined` value:

```javascript
import { Nullish, Undefined } from 'nullish-types'

Undefined() === undefined // true
undefined instanceof Nullish // true
undefined instanceof Undefined // true
```

## Null

The fake prototype and producer of `null` value:

```javascript
import { Nullish, Null } from 'nullish-types'

Null() === null // true
null instanceof Nullish // true
null instanceof Null // true
```

## None

The real prototype and constructor of `none` value:

```javascript
import { Nullish, None, none } from 'nullish-types'

new None() === none // true
none instanceof Nullish // true
none instanceof None // true
```
The `none` value represents the absence of any other object values. It can be considered a better alternative to `null` value because `none` is a real object with a prototype. Therefore it is not falsy and is not equal to `null` or `undefined`.

The interesting feature of `none` object is that any of its properties returns `none`:

```javascript
none.blablabla === none // true
none.blablabla[1].foo.bar === none // true
```

This way you will never be faced with TypeError like: "Cannot read [set] properties of undefined [null]".

## Install

> Install on Node.JS with [npm](https://www.npmjs.com/)

```bash
npm install nullish-types
```

## License

MIT © [Taras Panasyuk](webdev.taras@gmail.com)
