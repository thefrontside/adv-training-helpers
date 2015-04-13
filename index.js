/* jshint node: true */
'use strict';

var childProcess = require("child_process");
var RSVP = require('rsvp');

module.exports = {
  name: 'adv-training-helpers',
  includedCommands: function() {
    return {
      "training:ff": {
        name: "training:ff",
        description: "fast-forward to a specific step",
        works: "insideProject",

        run: function(commandOptions, rawArgs) {
          var exec = require('child-process-promise').exec;
          var tag = rawArgs[0];
          if (tag == null) {
            console.log('Usage: ');
            console.log('ember training:ff STEP');
            console.log('===== available steps =====');
            return exec('git tag | grep pt- ').then(function(output) {
              console.log(output.stdout.toString());
            });
          } else {
            return exec('git rev-parse ' + tag, {stdio: []})
            .then(function(result) {
              return exec("git reset --hard " + tag);
            }).then(function(){
              console.log('fast forwarded to ' + tag);
            }).catch(function(e) {
              console.log("unknown step '" + tag + "'");
              return RSVP.reject(new Error('unknown tag'));
            });
          }
        }
      }
    };
  }
};
