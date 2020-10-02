# ui-terminal
[![version](https://img.shields.io/npm/v/ui-terminal.svg)](https://www.npmjs.org/package/ui-terminal)
[![dependencies](https://david-dm.org/maksymkulia/ui-terminal.svg)](https://david-dm.org/maksymkulia/ui-terminal)
[![devDependencies](https://david-dm.org/maksymkulia/ui-terminal/dev-status.svg)](https://david-dm.org/maksymkulia/ui-terminal#info=devDependencies)

Basic helper for node js terminal. No dependencies.

---

## Installation
```bash
npm i ui-terminal
```

---

## Methods

### Simple console log

```js
let ut = require('ui-terminal') // Include ui-terminal module

let data = 'Hello world!' // Variables

ut.e(data) // Simple output (like console.log)

```
### Simple console log with text in color

Available colors:
- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white

```js
let ut = require('ui-terminal') // Include ui-terminal module

// Test variables
let data = 'Hello world!'
let color = 'green'

ut.incolor(data, color) // Simple output with text in color

```

---

## ToDo

- Text background
- String prototypes to color parts of text
- Custom styles
- Banners
- Matrix