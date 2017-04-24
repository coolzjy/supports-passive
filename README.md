# Supports Passive
Detect if user agent supports passive events

## Usage
```bash
npm i supports-passive -S
```

```js
import supportsPassive from 'supports-passive'

el.addEventListener('scroll', handler,
  supportsPassive ? { passive: true } : undefined)
```
