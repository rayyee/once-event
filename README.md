##### <p align="center">🍌 once-event</p>
---
Transform listen once event to promise.

### Usage

```
yarn add once-event
```

```javascript
import once from 'once-event';

;(async function() {
    await once( process, 'exit' );    
})()
```

### Related

* [@promises/from-event](https://www.npmjs.com/package/@promises/from-event)
* [p-event](https://github.com/sindresorhus/p-event)


### License
[MIT License](https://opensource.org/licenses/MIT)
