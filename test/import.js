var test = require('tape');

test("import", function (t) {
  var el = document.createElement('div');
  el.classList.add('import');
  el.innerHTML = 'import text';
  document.body.appendChild(el);

  var style1 = window.getComputedStyle(el);
  t.ok(['rgba(0, 0, 0, 0)', 'transparent'].indexOf(style1['background-color'] || style1.backgroundColor) !== -1, 'default background-color should be transparent white or transparent');
  t.equal(style1.color, 'rgb(0, 0, 0)', 'default color should be black');

  require('./import.scss');

  var style2 = window.getComputedStyle(el);
  t.equal(style2.color, 'rgb(255, 192, 203)', 'recursively imported color should be applied');

  t.end()
})
