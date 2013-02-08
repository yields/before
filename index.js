
/**
 * insert `b` before `a`.
 *
 * @param {Element} a
 * @param {Element} b
 * @return {Element} b
 */

module.exports = function(a, b){
  if (a.parentNode) {
    return a.parentNode.insertBefore(b, a);
  }
};
