![JSS logo](https://avatars1.githubusercontent.com/u/9503099?v=3&s=60)

## JSS plugin that adds default custom unit to numeric values where needed

This plugin lets you omit the unit from values of style properties. Default unit is "px", but you can pass anything else instead.

[Demo](http://jsstyles.github.io/examples/index.html#plugin-jss-default-unit) -
[JSS](https://github.com/jsstyles/jss)

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/jsstyles/jss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


## Usage example

```javascript
import jss from 'jss'
import defaultUnit from 'jss-default-unit'

// px is default, lets make default to em
jss.use(defaultUnit({unit: 'em'}))

let sheet = jss.createStyleSheet({
  container: {
    'font-size': 20,
    'z-index': 1,
    'line-height': 1.2
  }
})
```

```javascript
console.log(sheet.toString())
```
```css
.jss-0-0 {
  font-size: 20em;
  z-index: 1;
  line-height: 1.2;
}
```

```javascript
console.log(sheet.classes)
```
```javascript
{ container: "jss-0-0" }
```

## Issues

File a bug against [jsstyles/jss prefixed with \[jss-default-unit\]](https://github.com/jsstyles/jss/issues/new?title=[jss-default-unit]%20).

## Run tests

```bash
npm i
npm run test
```

## License

MIT
