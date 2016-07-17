module.exports = (function() {

  'use strict';

  // Load .env
  require('dotenv').config({silent: true});

  let Paths = {
    Application: './required/application.js',
    Controller: './required/controller.js',
    Daemon: './required/daemon.js',
    ExecutionQueue: './required/execution_queue.js',
    Router: './required/router.js',
    Scheduler: './required/scheduler.js',
    StrongParam: './required/strong_param.js',
    Test: './mocha/test.js',
    TestRunner: './mocha/test_runner.js',
    utilities: './required/utilities.js'
  };

  let Load = {};

  let Module = {
    require: path => require(`${process.cwd()}/${path}`),
    mime: require('mime-types')
  };

  Object.defineProperties(
    Module,
    Object.keys(Paths).reduce((obj, key) => {

      obj[key] = {
        get: () => { return Load[key] || (Load[key] = require(Paths[key])); },
        enumerable: true
      };

      return obj;

    }, {})
  );

  return Module;

})();
