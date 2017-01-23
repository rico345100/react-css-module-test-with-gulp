# react-css-module-test-with-browserify
I made this for demonstrate that babel-plugin-react-css-modules won't worked with browserify + gulp environment.

## Run

If you don't have gulp globally, you should install it globally first.
```bash
$ npm install -g gulp
$ npm install
$ gulp
```

bundling will failed with

```bash
.text {
^
ParseError: Unexpected token
```