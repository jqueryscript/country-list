  // filter
function filterOnClass(baseClass, s) {
  let re = new RegExp(s.trim(), 'i');
  document.querySelectorAll('.' + baseClass).forEach(node => {
    let cNames = Array.from(node.classList);
    // Show all if search string is blank
    if (s.trim() == '') {
      node.classList.remove('hide');
    // Otherwise, filter
    } else if (cNames.some(cName => re.test(cName))) {
      node.classList.remove('hide');
    } else {
       node.classList.add('hide');
    }
  });
}
