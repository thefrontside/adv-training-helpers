var childProcess = require("child_process");

module.exports = {
  description: 'Initialize advanced training helper setup and teardown',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName: function() {
    // No-op
  },

  afterInstall: function(options) {
    childProcess.execSync("git remote add training https://github.com/thefrontside/adv-ember-training.git");
    childProcess.execSync("git fetch training");
  },

  afterUninstall: function(options) {
    // This doesn't seem to work yet.
    childProcess.execSync("git remote remove training");
  }

};
