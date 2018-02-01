// Note: You should't have to reload your page due to our Browsersync in our Gulp setup. If it doesn't work, always check your browser's console for errors!

const requireDir = require('require-dir');

// Require all tasks in /tasks, including subfolders
requireDir('./tasks', { recurse: true });
