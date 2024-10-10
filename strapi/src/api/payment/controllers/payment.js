'use strict';
const crypto = require('crypto');
/**
 * A set of functions called "actions" for `payment`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
