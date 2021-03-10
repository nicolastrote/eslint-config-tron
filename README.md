# eslint-config-tron

[![npm version][npm-image]][npm-url]
![License][license]

Tron"s ESLint config with TypeScript, Hooks and Prettier support.

# How to use

Install `typescript`, `eslint` and `prettier`, `eslint-config-tron-typescript-prettier` :

```bash
$ npm install typescript eslint prettier eslint-config-tron --save-dev
```

and put it into your `.eslintrc.js` :

```js
module.exports = {
  extends: "tron-typescript-hooks-prettier",
  rules: {
    // Additional, per-project rules...
  }
};
```

## License

Open source [licensed as MIT](https://github.com/nicolastrote/eslint-config-tron/blob/master/LICENSE).

[npm-image]: https://img.shields.io/npm/v/eslint-config-tron.svg
[npm-url]: https://npmjs.org/package/eslint-config-tron
[license]: https://img.shields.io/npm/l/eslint-config-tron.svg
