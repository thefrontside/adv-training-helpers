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
          var tag = rawArgs[0];
          if (tag == null) {
            console.log('Usage: ');
            console.log('ember training:ff STEP');
            console.log('===== available steps =====');
            console.log(childProcess.execSync('git tag | grep pt- ').toString());
          } else {
            try {
              childProcess.execSync('git rev-parse ' + tag, {stdio: []});
            } catch (e) {
              console.log("unknown step '" + tag + "'");
              return;
            }
            childProcess.execSync("git reset --hard " + tag);
            console.log('fast forwarded to ' + tag);
          }
        }
      }
    };
  }
};
