## description

get npm version

## API

```
const version = require('get-package-version')(packageName[, { registry, timeout }]);
```

+   `packageName`

    packageName

+   `registry`

    npm registry when getting version

+   `timeout`

    timeout when getting version

## return

+   return `null` when timeout or error happens
+   return version when getting version successfully
