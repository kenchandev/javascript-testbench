/**
 * Written by Ken Chan
 * MIT Licensed
 */

'use strict';

module.exports = {
  node: {
    singly: require('./lib/node').singly,
    doubly: require('./lib/node').doubly
  },
  list: {
    singly: require('./lib/singly-linked'),
    doubly: require('./lib/doubly-linked'),
    circular: require('./lib/circular-linked')
  }
};
