# eslint-config-tron

[![npm version][npm-image]][npm-url]
![License][license]

Tron"s ESLint config with TypeScript, Hooks and Prettier support.

# How to use

Install `eslint-config-tron` and its peer dependencies :

```bash
$ npm install eslint-config-tron --save-dev
$ npx install-peerdeps --dev eslint-config-tron
```

and put it into your `.eslintrc.js` :

```js
module.exports = {
  extends: "eslint-config-tron",
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
