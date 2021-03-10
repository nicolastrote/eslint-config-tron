# Eslint-config-tron

[![npm version][npm-image]][npm-url]
![License][license]

Tron"s ESLint config with TypeScript, Hooks and Prettier support.

## Table of contents

- [Eslint-config-tron](#eslint-config-tron)
  - [Table of contents](#table-of-contents)
  - [What It Does](#what-it-does)
  - [How to install](#how-to-install)
  - [Use in scripts](#use-in-scripts)
  - [How Tweaking Lint Rules](#how-tweaking-lint-rules)
  - [Webstorm Setup](#webstorm-setup)
    - [Eslint in Webstorm](#eslint-in-webstorm)
    - [Prettier in Webstorm](#prettier-in-webstorm)
  - [VS Code Setup](#vs-code-setup)
    - [Eslint in VS Code](#eslint-in-vs-code)
    - [Miscellaneous plugins in VS Code (Optional)](#miscellaneous-plugins-in-vs-code-optional)
  - [License](#license)

## What It Does

- Lints JavaScript and TypeScript code based on the latest standards
- Fixes issues and formatting errors with Prettier
- Lints + Fixes inside of html script tags
- Lints + Fixes TypeScript via airbnb-typescript
- Lints + Fixes React Hooks via airbnb/hooks
- You can see all the [rules here](https://github.com/nicolastrote/eslint-config-tron/blob/master/index.js).
  
## How to install

Install `eslint-config-tron` and its peer dependencies :

```bash
npm install eslint-config-tron --save-dev
npx install-peerdeps --dev eslint-config-tron
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

## Use in scripts

You can add 2 scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

- Now you can :
  - manually lint your code: `npm run lint`
  - or fix all fixable issues: `npm run lint:fix`

## How Tweaking Lint Rules

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file.

The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"` while [prettier options](https://prettier.io/docs/en/options.html) go under `"prettier/prettier"`.

Note that prettier rules overwrite anything in this config (trailing comma, and single quote), so you'll need to include those as well.                       |

```js
{
  "extends": [
    "eslint-config-tron"
  ],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 8,
      }
    ]
  }
}
```

## Webstorm Setup

### Eslint in Webstorm

- Settings > Languages and Frameworks | JavaScript | ESLint:
  - Manual ESLint configuration
    - Node interpreter : Project (~/.nvm/versions/node/.../bin/node)
    - ESLint package : ~/Workspace/my-app/node_modules/eslint
  - Configuration file
    - Configuration file: /User/../Worspace/my-app/.eslintrc

If you want to lint at save :

- Settings > Tools | File watchers.
  - File type : any or tax
  - Program:   $ProjectFileDir$/node_modules/.bin/eslint
  - Arguments:   --fix $FilePath$
  - Output paths to refresh:  $FilePath$

### Prettier in Webstorm

- install prettier:

```Unix
yarn add -D prettier
```

- Settings > Languages and Frameworks | JavaScript | Prettier
  - Node interpreter : Project (~/.nvm/versions/node/.../bin/node)
  - Prettier package: ~/Workspace/my-app/node_modules/prettier

## VS Code Setup

### Eslint in VS Code

VS Code will lint for you:

- Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Go in VS Code settings via `Code/File` → `Preferences` → `Settings`.
  It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:
  
```js
  {
  "files.associations": {
    "*.jsx": "javascriptreact"
  },
  "editor.insertSpaces": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, /* This allow fix for eslint + prettier */
    "source.fixAll": true,
    "source.organizeImports": false
  },
  "json.format.enable": true,
  "files.autoSave": "onFocusChange",
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.updateImportsOnFileMove.enabled": "always",
}
```

### Miscellaneous plugins in VS Code (Optional)

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Sort lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)
- [TypeScript Import](https://marketplace.visualstudio.com/items?itemName=kevinmcgowan.TypeScriptImport)
- [Typescript React code snippets](https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

## License

Open source [licensed as MIT](https://github.com/nicolastrote/eslint-config-tron/blob/master/LICENSE).

[npm-image]: https://img.shields.io/npm/v/eslint-config-tron.svg
[npm-url]: https://npmjs.org/package/eslint-config-tron
[license]: https://img.shields.io/npm/l/eslint-config-tron.svg
