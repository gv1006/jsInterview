const arr = [1, 2, 3, 4, 5];
console.log('***Array ForEach Start***');
arr.forEach(ele => {
  console.log(ele);
});
console.log('***Array ForEach End***');
// It has to be accessible for all array elements
// So add your custom function to Array prototype
Array.prototype.myForEach = (function (cb) {
  // Since we're calling myForEach with array element, 'this' will have reference to that array object
  let _arr = this;
  for (let i = 0; i < _arr.length; i++) {
    // Since forEach also passes index as second argument and the actual array as third argument, 
    // we are also doing the same
    cb(_arr[i], i, _arr);
  }
})

console.log('***Array myForEach Start***');
arr.myForEach(ele => {
  console.log(ele);
})
console.log('***Array myForEach End***');