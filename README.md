[![Build Status](https://travis-ci.org/roman01la/grunt-mocha-casperjs.svg?branch=master)](https://travis-ci.org/roman01la/grunt-mocha-casperjs)

# grunt-mocha-casperjs

> Grunt wrapper for mocha-casperjs

## Getting Started
This plugin requires Grunt.

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
Default value: `'30000'`

Test-case timeout in milliseconds.

#### options.slow
Type: `Number`
Default value: `'75'`

“Slow” test threshold in milliseconds.

#### options.ui
Type: `String`
Default value: `'bdd'`

Test user-interface (bdd|tdd|exports).

#### options.color
Type: `Boolean`
Default value: `'false'`

Disable colored output, enabled by default.

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
- 2014-03-28   v0.1.2   Add Casper timeout and save report output options
- 2014-03-28   v0.1.1   Add test failing
- 2014-03-28   v0.1.0   Initial release

## License
Copyright (c) 2014 Roman Liutikov. Licensed under the MIT license.
