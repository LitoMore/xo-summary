# xo-summary

[![](https://img.shields.io/npm/v/xo-summary.svg)](https://www.npmjs.com/package/xo-summary)
[![](https://img.shields.io/npm/l/xo-summary.svg)](https://github.com/LitoMore/xo-summary/blob/main/LICENSE)
[![](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Display output from `xo` as a list of style errors, ordered by count.

_This package is inspired from [standard-summary](https://github.com/zeke/standard-summary)._

> [!TIP]\
> This package may not be necessary. You can use `xo --reporter json` to generate JSON output and summarize it with your preferred tool.

## Install

```shell
npm install -g xo xo-summary
```

## Usage

`cd` into your favorite javascript project, then pipe the output of xo into xo-summary:

```shell
cd my/project
xo | xo-summary

17     Missing semicolon.
8      Expected indentation of 1 tab but found 2 spaces.
4      Expected blank line between class members.
3      Expected an assignment or function call and instead saw an expression.
1      Expected blank line before this statement.
1      Callbacks must be listed after all other props
1      Unable to resolve path to module pages/login.
1      Unable to resolve path to module pages/messages.
1      Unable to resolve path to module pages/settings.
1      Shorthand props must be listed before all other props
```

You can also use the `--name-only` option to display only the rule names:

```shell
cd my/project
xo | xo-summary --name-only

17     semi
8      indent
4      lines-between-class-members
3      no-unused-expressions
3      import/no-unresolved
2      react/jsx-sort-props
1      padding-line-between-statements
```

## Related

- [XO](https://github.com/xojs/xo) - JavaScript/TypeScript linter (ESLint wrapper) with great defaults

## License

MIT
