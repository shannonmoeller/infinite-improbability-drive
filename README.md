# 🚀🚀 → 🐋 🌺

The [Infinite Improbability Drive](http://hitchhikers.wikia.com/wiki/Infinite_Improbability_Drive) is a wonderful new method of crossing interstellar distances in a mere nothingth of a second, without all that tedious mucking about in hyperspace. It was discovered by lucky chance, and then developed into a governable form of propulsion by the Galactic Government's research centre on Damogran.

## Install

```command
$ npm install --global infinite-improbability-drive
```

## Usage

```man
Usage: infinite-improbability-drive [options]
       iid [options]

Options:

  -i, --improbability             Improbability of an IID existing. Required.
  -b, --brownian-motion-producer  Self-explanatory. Required.
```

## Examples

```command
$ iid -i 42 -b 🚀
$ iid -i 0.023809523809523808 -b ☕
```

## API

### `iid(options)`

- `options` `{Object}`
  - `improbability` `{Number}`
  - `brownianMotionProducer` `{String}`

```js
const drive = require('infinite-improbability-drive');
const result = drive({
    improbability: 0.023809523809523808,
    brownianMotionProducer: '☕',
});
```
