const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('***Array filter function start***');
const newArray = arr.filter(function (ele) {
  return ele > 5;
});
console.log('newArray', newArray);
console.log('***Array filter function end***');
// It has to be accessible for all array elements
// So add your custom function to Array prototype
Array.prototype.myFilter = function (cb) {
  // We will acess this myFilter function with an array
  // So, array reference will be available with this
  const _arr = this;
  const _ret = [];
  for (let i = 0; i < _arr.length; i++) {
    if (cb(_arr[i])) {
      _ret.push(_arr[i]);
    }
  }
  return _ret;
};

console.log('***Array my filter function start***');
const newArray1 = arr.myFilter(function (ele) {
  return ele > 5;
});
console.log('newArray1', newArray1);
console.log('***Array my filter function end***');