# xo-summary

[![](https://img.shields.io/travis/LitoMore/xo-summary/master.svg)](https://travis-ci.org/LitoMore/xo-summary)
[![](https://img.shields.io/npm/v/xo-summary.svg)](https://www.npmjs.com/package/xo-summary)
[![](https://img.shields.io/npm/l/xo-summary.svg)](https://github.com/LitoMore/xo-summary/blob/master/LICENSE)
[![](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Display output from `xo` as a list of style errors, ordered by count.

*This package is inspired from [standard-summary](https://github.com/zeke/standard-summary).*

## Install

```bash
$ npm install -g xo xo-summary
```

## Usage

`cd` into your favorite javascript project, then pipe the output of xo into xo-summary:

```
$ cd my/project
$ xo | xo-summary

188    Missing semicolon.
20     Expected indentation of 0 tabs but found 4 spaces.
15     Expected property shorthand.
15     Unexpected space before function parentheses.
11     Unexpected function expression.
9      Expected { after if condition.
5      Identifier time_ago is not in camel case.
4      Expected { after else.
...
```

## Related

- [XO](https://github.com/sindresorhus/xo) - JavaScript happiness style linter

## License

MIT © [LitoMore](https://github.com/LitoMore)
