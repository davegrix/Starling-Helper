<!--@'# ' + package.name + shields('travis')-->
# @zkochan/read-pkg[![Build status for master](https://img.shields.io/travis/zkochan/read-pkg/master.svg?style=flat)](https://travis-ci.org/zkochan/read-pkg)
<!--/@-->

> Read a package.json file

## Why

- [Gracefully handles filesystem issues](https://github.com/isaacs/node-graceful-fs)
- [Strips UTF-8 BOM](https://github.com/sindresorhus/strip-bom)
- [Throws more helpful JSON errors](https://github.com/sindresorhus/parse-json)
- [Normalizes the data](https://github.com/npm/normalize-package-data#what-normalization-currently-entails)

<!--@installation()-->
## Installation

This module is installed via npm:

```sh
npm install @zkochan/read-pkg --save
```
<!--/@-->

## Usage

<!--@example('example.js')-->
```js
var readPkg = require('@zkochan/read-pkg');
var path = require('path');

readPkg().then(function (pkg) {
	console.log(pkg);
	//> { name: '@zkochan/read-pkg',
	//    version: '1.1.1',
	//    description: 'Read a package.json file',
	//    license: 'MIT',
	//    repository: 
	//     { type: 'git',
	//       url: 'git+ssh://git@github.com/zkochan/read-pkg.git' },
	//    author: 
	//     { name: 'Sindre Sorhus',
	//       email: 'sindresorhus@gmail.com',
	//       url: 'sindresorhus.com' },
	//    engines: { node: '>=0.10.0' },
	//    scripts: { test: 'xo && ava', md: 'mos' },
	//    files: [ 'index.js' ],
	//    keywords: 
	//     [ 'json',
	//       'read',
	//       'parse',
	//       'file',
	//       'fs',
	//       'graceful',
	//       'load',
	//       'pkg',
	//       'package',
	//       'normalize' ],
	//    dependencies: 
	//     { '@zkochan/normalize-package-data': '^2.3.6',
	//       'load-json-file': '^1.0.0',
	//       'path-type': '^1.0.0' },
	//    devDependencies: { ava: '*', mos: '^0.16.0', xo: '*' },
	//    bugs: { url: 'https://github.com/zkochan/read-pkg/issues' },
	//    readme: 'ERROR: No README data found!',
	//    homepage: 'https://github.com/zkochan/read-pkg#readme',
	//    _id: '@zkochan/read-pkg@1.1.1' }
});

readPkg(__dirname).then(function (pkg) {
	console.log(pkg);
	//> { name: '@zkochan/read-pkg',
	//    version: '1.1.1',
	//    description: 'Read a package.json file',
	//    license: 'MIT',
	//    repository: 
	//     { type: 'git',
	//       url: 'git+ssh://git@github.com/zkochan/read-pkg.git' },
	//    author: 
	//     { name: 'Sindre Sorhus',
	//       email: 'sindresorhus@gmail.com',
	//       url: 'sindresorhus.com' },
	//    engines: { node: '>=0.10.0' },
	//    scripts: { test: 'xo && ava', md: 'mos' },
	//    files: [ 'index.js' ],
	//    keywords: 
	//     [ 'json',
	//       'read',
	//       'parse',
	//       'file',
	//       'fs',
	//       'graceful',
	//       'load',
	//       'pkg',
	//       'package',
	//       'normalize' ],
	//    dependencies: 
	//     { '@zkochan/normalize-package-data': '^2.3.6',
	//       'load-json-file': '^1.0.0',
	//       'path-type': '^1.0.0' },
	//    devDependencies: { ava: '*', mos: '^0.16.0', xo: '*' },
	//    bugs: { url: 'https://github.com/zkochan/read-pkg/issues' },
	//    readme: 'ERROR: No README data found!',
	//    homepage: 'https://github.com/zkochan/read-pkg#readme',
	//    _id: '@zkochan/read-pkg@1.1.1' }
});

readPkg(path.join('unicorn', 'package.json')).then(function (pkg) {
	console.log(pkg);
});
```
<!--/@-->

## API

### readPkg([path], [options])

Returns a promise that resolves to the parsed JSON.

### readPkg.sync([path], [options])

Returns the parsed JSON.

#### path

Type: `string`  
Default: `.`

Path to a `package.json` file or its directory.

#### options

##### normalize

Type: `boolean`  
Default: `true`

[Normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) the package data.

## Related

- [read-pkg-up](https://github.com/sindresorhus/read-pkg-up) - Read the closest package.json file
- [write-pkg](https://github.com/sindresorhus/write-pkg) - Write a `package.json` file
- [load-json-file](https://github.com/sindresorhus/load-json-file) - Read and parse a JSON file

<!--@license()-->
## License

MIT © [Sindre Sorhus](sindresorhus.com)
<!--/@-->
