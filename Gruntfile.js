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
      tests: ['tmp']
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
           */

          // reporter: 'spec',
          // color: false,
          // ui: 'bdd',
          // slow: 1000,
          timeout: 5000
        },
        files: {
          src: ['test/**/*']
        }
      }
      // ,
      // custom_options: {
      //   options: {
      //     separator: ': ',
      //     punctuation: ' !!!'
      //   },
      //   files: {
      //     'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
      //   }
      // }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'mocha_casperjs']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
