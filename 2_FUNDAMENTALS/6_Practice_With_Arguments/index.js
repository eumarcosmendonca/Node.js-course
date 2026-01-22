// internal module
const im = require('./internal_module.js');
const sum = im.sum;

// external module
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
const a = args['a'];
const b = args['b'];
sum(a, b);