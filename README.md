[![NPM version](https://badge.fury.io/js/grunt-mocha-casperjs.svg)](http://badge.fury.io/js/grunt-mocha-casperjs)
[![Build Status](https://travis-ci.org/roman01la/grunt-mocha-casperjs.svg?branch=master)](https://travis-ci.org/roman01la/grunt-mocha-casperjs)
[![Dependency Status](https://gemnasium.com/roman01la/grunt-mocha-casperjs.svg)](https://gemnasium.com/roman01la/grunt-mocha-casperjs)

# grunt-mocha-casperjs

> Grunt wrapper for mocha-casperjs

## Getting Started
This plugin requires Grunt and PhantomJS.
Install PhantomJS: `npm install phantomjs -g`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mocha-casperjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mocha-casperjs');
```

## The "mocha_casperjs" task

### Overview
In your project's Gruntfile, add a section named `mocha_casperjs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mocha_casperjs: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.reporter
Type: `String`
Default value: `'spec'`

Any Mocha reporter that can run in the phantomjs or slimerjs environment.

#### options.timeout
Type: `Number`
Default value: `30000`

Test-case timeout in milliseconds.

#### options.slow
Type: `Number`
Default value: `75`

“Slow” test threshold in milliseconds.

#### options.ui
Type: `String`
Default value: `'bdd'`

Test user-interface (bdd|tdd|exports).

#### options.color
Type: `Boolean`
Default value: `false`

Disable colored output, enabled by default.

#### options.casperTimeout
Type: `Number`
Default value: `5000`

Casper's timeout, should be less than Mocha's.

#### options.width
Type: `Number`
Default value: `400`

Casper's viewport width.

#### options.height
Type: `Number`
Default value: `300`

Casper's viewport height.

#### options.userAgent
Type: `String`
Default value: Phantom's UA string

Casper's User-Agent string.

#### options.file
Type: `String`

Path to output file. Save reporter output, for json, xunit, etc. type of reporters.

### Other options

Other CLI options may be passed to mocha-casperjs by quoting the flag name where needed. E.g., if you want to use your existing mocha/chai/casper-chai, use options like this (coffeescript example):
```
    all:
      options:
        'mocha-path':       'node_modules/mocha'
        'chai-path':        'node_modules/chai'
        'casper-chai-path': 'node_modules/casper-chai'
```

### Usage Examples

#### Basic usage

```js
grunt.initConfig({
  mocha_casperjs: {
    options: {
      timeout: 5000,
      color: false
    },
    files: {
      src: ['test/**/*']
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 2014-12-10   v0.1.4.1
- 2014-04-19   v0.1.4
- 2014-03-28   v0.1.3   Add Casper width, height viewport size & UA string options
- 2014-03-28   v0.1.2   Add Casper timeout and save report output options
- 2014-03-28   v0.1.1   Add test failing
- 2014-03-28   v0.1.0   Initial release

## License
Copyright (c) 2014 Roman Liutikov. Licensed under the MIT license.
