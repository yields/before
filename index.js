
/**
 * dependencies.
 */

var after = require('after');

/**
 * insert `b` before `a`.
 *
 * @param {Element} a
 * @param {Element} b
 * @return {Element} b
 */

module.exports = function(a, b){
  return after(a, b, true);
};
