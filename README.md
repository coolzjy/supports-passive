# Supports Passive
Detect if user agent supports passive events

## Usage
```bash
npm i supports-passive -S
```

```js
import supportsPassive from 'supports-passive'

el.addEventListener('mousewheel', handler,
  supportsPassive ? { passive: true } : undefined)
```
