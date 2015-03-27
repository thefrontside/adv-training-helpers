/* jshint node: true */
'use strict';

var childProcess = require("child_process");

module.exports = {
  name: 'adv-training-helpers',
  includedCommands: function() {
    return {
      "training:ff": {
        name: "training:ff",
        description: "fast-forward to a specific step",
        works: "insideProject",

        run: function(commandOptions, rawArgs) {
          childProcess.execSync("git reset --hard " + rawArgs[0]);
        }
      }
    };
  }
};
