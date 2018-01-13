<!--@'# ' + package.name + shields('travis')-->
# @zkochan/read-pkg-up[![Build status for master](https://img.shields.io/travis/zkochan/read-pkg-up/master.svg?style=flat)](https://travis-ci.org/zkochan/read-pkg-up)
<!--/@-->

> Read the closest package.json file

## Why

- [Finds the closest package.json](https://github.com/sindresorhus/find-up)
- [Gracefully handles filesystem issues](https://github.com/isaacs/node-graceful-fs)
- [Strips UTF-8 BOM](https://github.com/sindresorhus/strip-bom)
- [Throws more helpful JSON errors](https://github.com/sindresorhus/parse-json)
- [Normalizes the data](https://github.com/npm/normalize-package-data#what-normalization-currently-entails)

<!--@installation()-->
## Installation

This module is installed via npm:

```sh
npm install @zkochan/read-pkg-up --save
```
<!--/@-->

## Usage

<!--@example('example.js')-->
```js
const readPkgUp = require('@zkochan/read-pkg-up');

readPkgUp().then(result => {
	console.log(result);
	//> { pkg: 
	//     { name: '@zkochan/read-pkg-up',
	//       version: '1.0.2',
	//       description: 'Read the closest package.json file',
	//       license: 'MIT',
	//       repository: 
	//        { type: 'git',
	//          url: 'git+ssh://git@github.com/zkochan/read-pkg-up.git' },
	//       author: 
	//        { name: 'Sindre Sorhus',
	//          email: 'sindresorhus@gmail.com',
	//          url: 'sindresorhus.com' },
	//       engines: { node: '>=0.10.0' },
	//       scripts: { test: 'xo && ava', md: 'mos' },
	//       files: [ 'index.js' ],
	//       keywords: 
	//        [ 'json',
	//          'read',
	//          'parse',
	//          'file',
	//          'fs',
	//          'graceful',
	//          'load',
	//          'pkg',
	//          'package',
	//          'find',
	//          'up',
	//          'find-up',
	//          'findup',
	//          'look-up',
	//          'look',
	//          'file',
	//          'search',
	//          'match',
	//          'package',
	//          'resolve',
	//          'parent',
	//          'parents',
	//          'folder',
	//          'directory',
	//          'dir',
	//          'walk',
	//          'walking',
	//          'path' ],
	//       dependencies: { '@zkochan/read-pkg': '^1.1.2', 'find-up': '^1.0.0' },
	//       devDependencies: { ava: '*', mos: '^0.16.0', xo: '*' },
	//       bugs: { url: 'https://github.com/zkochan/read-pkg-up/issues' },
	//       readme: 'ERROR: No README data found!',
	//       homepage: 'https://github.com/zkochan/read-pkg-up#readme',
	//       _id: '@zkochan/read-pkg-up@1.0.2' },
	//    path: '/home/zoltan/src/read-pkg-up/package.json' }
});
```
<!--/@-->

## API

### readPkgUp([options])

Returns a promise for the result object.

### readPkgUp.sync([options])

Returns a result object.

#### options

##### cwd

Type: `string`  
Default: `.`

Directory to start looking for a package.json file.

##### normalize

Type: `boolean`  
Default: `true`

[Normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) the package data.

## Related

- [read-pkg](https://github.com/sindresorhus/read-pkg) - Read a package.json file
- [pkg-up](https://github.com/sindresorhus/pkg-up) - Find the closest package.json file
- [find-up](https://github.com/sindresorhus/find-up) - Find a file by walking up parent directories
- [pkg-conf](https://github.com/sindresorhus/pkg-conf) - Get namespaced config from the closest package.json

## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
