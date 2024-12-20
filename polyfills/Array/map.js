const arr = [1, 2, 3, 4, 5];

console.log('***Array map function start***');
const newArr = arr.map(ele => {
  return ele * 4
});
console.log('newArr', newArr);
console.log('***Array map implementation end***');
// It has to be accessible for all array elements
// So add your custom function to Array prototype
Array.prototype.myMap = (function (cb) {
  let _result = [];
  // Since we're calling myForEach with array element, 'this' will have reference to that array object
  let _arr = this;
  for (let i = 0; i < _arr.length; i++) {
    // Since forEach also passes index as second argument and the actual array as third argument, 
    // we are also doing the same
    _result.push(cb(_arr[i], i, _arr));
  }
  return _result;
})

console.log('***Array my map function start***');
const newArr1 = arr.map(ele => {
  return ele * 4
});
console.log('newArr', newArr1);
console.log('***Array my map implementation end***');