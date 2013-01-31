
var before = require('before');

// assert

function assert(expr, ms){
  if (expr) return;
  throw new Error(ms || 'does not work!');
}

describe('before(a, b)', function(){
  it('should insert b before a', function(){
    var ul = document.createElement('ul');
    var a = document.createElement('li');
    var b = document.createElement('li');
    a.innerText = 'a';
    b.innerText = 'b';
    ul.appendChild(a);
    before(a, b);
    assert(a === b.nextSibling);
  });
});
