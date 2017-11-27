[![Npm Version](https://img.shields.io/badge/npm-%3E%3D%203.3.1-brightgreen.svg)](https://www.npmjs.com/package/get-npm-package-version) [![Node Version](https://img.shields.io/badge/node-%3E%3D%206.9.1-brightgreen.svg)](https://nodejs.org/en/) [![Build Status](https://travis-ci.org/hoperyy/get-npm-package-version.svg?branch=master)](https://travis-ci.org/hoperyy/get-npm-package-version) [![Coverage Status](https://coveralls.io/repos/github/hoperyy/get-npm-package-version/badge.svg?branch=master)](https://coveralls.io/github/hoperyy/get-npm-package-version?branch=master)

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
