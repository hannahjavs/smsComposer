// app.js is the main JS file which you should define your Angular module

// The first argument is what we want to call our module, the second is an array of dependencies (we don't need any at the moment, so it is empty):
angular
  .module('smsComposer', []);

// It's important to always include that array when defining a module even if there are no dependencies. This tells angular we're initialising (creating) a new module.

// This will be referenced in the html with ng-app above the <header>
// e.g <html ng-app="smsComposer">
