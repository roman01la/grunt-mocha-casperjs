/*
 * grunt-mocha-casperjs
 *
 *
 * Copyright (c) 2014 Roman Liutikov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: [
      'tmp',
      'test/reports/actual'
      ]
    },

    // Configuration to be run (and then tested).
    mocha_casperjs: {
      default_options: {
        options: {

          /* Any Mocha reporter that can run in the phantomjs or slimerjs environment.
           * Test timeout, default 30s
           * UI: bdd, tdd, exports
           * Slow test threshold, default 75ms
           * Disable colored output, enabled by default
           * Casper's timeout, should be less than Mocha's
           * Save reporter output, for json, xunit, etc. type of reporters
           * width, height: PhantomJS viewport size (window.innerWidth, window.innerHeight)
           * User-Agent string
           */

          // reporter: 'spec',
          // color: false,
          // ui: 'bdd',
          // slow: 1000,
          // timeout: 5000,
          // casperTimeout: 5000,
          // file: 'test/report',
          width: 1920,
          height: 1080,
          userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)'
        },
        files: {
          src: ['test/test.js']
        }
      },
      output: {
        options: {
          reporter: 'json',
          file: 'test/reports/actual/report'
        },
        files: {
          src: ['test/report.js']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/nodeunit/*.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'mocha_casperjs', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
