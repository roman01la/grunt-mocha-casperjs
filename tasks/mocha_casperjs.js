/*
 * grunt-mocha-casperjs
 *
 *
 * Copyright (c) 2014 Roman Liutikov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var async = require('async'),
      path = require('path'),
      querystring = require('querystring'),
      _ = require('lodash'),
      exists = grunt.file.exists;

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('mocha_casperjs', 'Grunt wrapper for mocha-casperjs', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      color: false,
      reporter: 'spec',
      timeout: 30000,
      ui: 'bdd'
    });

    var args = [],
        errors = 0,
        done = this.async(),
        binPath = '.bin/mocha-casperjs' + (process.platform === 'win32' ? '.cmd' : ''),
        mocha_casperjs_path = path.join(__dirname, '..', '/node_modules/', binPath);

    // disable color
    if (options.color) {
      args.push('--no-color');
    }

    // Check for a local install of mocha-casperjs to use
    if (!exists(mocha_casperjs_path)) {
      var i = module.paths.length,
          bin;
      while(i--) {
        bin = path.join(module.paths[i], binPath);
        if (exists(bin)) {
          mocha_casperjs_path = bin;
          break;
        }
      }
    }

    if (!exists(mocha_casperjs_path)) {
      grunt.fail.warn('Unable to find mocha-phantomjs.');
    }

    // Loop through the options and add them to args
    // Omit stuff from the options to be passed through
    _.each(_.omit(options, 'color'), function (value, key) {

      switch (key) {
        case 'width':
          key = 'viewport-' + key;
          break;
        case 'height':
          key = 'viewport-' + key;
          break;
        case 'userAgent':
          key = 'user-agent';
          value = querystring.escape(value);
          break;
        case 'casperTimeout':
          key = 'casper-timeout';
          break;
      }

      // Convert to the key to a switch
      var sw = '--' + key + '=';
      // Add the switch and its value
      // If the value is an array, add all array elements to the array.
      if (!_.isArray(value)) {
        value = [value];
      }

      value.forEach(function (value) {
        args.push([sw + value.toString()]);
      });
    });

    async.eachSeries(this.files, function (file, next) {

      var mochaCasperjs = grunt.util.spawn({
        cmd: mocha_casperjs_path,
        args: _.flatten(file.src.concat(args))
      }, function (err, result, code) {
        next();
      });

      mochaCasperjs.stdout.pipe(process.stdout);
      mochaCasperjs.stderr.pipe(process.stderr);

      mochaCasperjs.on('exit', function (code) {
        if (code === 127) {
          grunt.fail.warn('Phantomjs isn\'t installed');
        }

        errors += code;
      });

    }, function() {

      // Fail if errors are reported
      if(errors > 0) {
        grunt.fail.warn(errors + ' tests failed');
      }

      done();

    });
  });
};
