var exec = require('child-process-promise').exec;

function asyncCommand(command) {
  return function(){
    return exec(command);
  }
}

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
    return exec("git remote add training https://github.com/thefrontside/adv-ember-training-v2.git")
    .then(asyncExec("git remote add training https://github.com/thefrontside/adv-ember-training-v2.git"))
    .then(asyncExec("git fetch training"))
    .then(asyncExec("git fetch training --tags"))
    .then(asyncExec("npm install --save-dev phantomjs"));
  },

  afterUninstall: function(options) {
    // This doesn't seem to work yet.
    return exec("git remote remove training");
  }

};
