[![Npm Version](https://img.shields.io/badge/npm-%3E%3D%206.9.1-green.svg)](https://nodejs.org/en/) [![Build Status](https://travis-ci.org/hoperyy/get-npm-package-version.svg?branch=master)](https://travis-ci.org/hoperyy/get-npm-package-version)

## description

get npm package version

## API

```
npm i get-npm-package-version
```

```
const version = require('get-npm-package-version')(packageName[, { registry, timeout }]);
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
