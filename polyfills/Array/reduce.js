// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

Array.prototype.myReduce = function (cb, initialValue) {
  const _arr = this;
  if (!initialValue && _arr.length === 0) {
    throw new Error('please pass inital value or have some elements in array')
  }
  let _acc = initialValue;
  for (let i = 0; i < _arr.length; i++) {
    if (!_acc) {
      _acc = _arr[i];
      continue;
    }
    _acc = cb(_acc, _arr[i], i, _arr);
  }
  return _acc;
}

const sumWithInitial1 = array1.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  // initialValue,
);

console.log(sumWithInitial);

const getMax = (a, b) => Math.max(a, b);
console.log([1, 100].myReduce(getMax, 50));
console.log([50].myReduce(getMax, 10));
console.log([1, 100].myReduce(getMax));
console.log([50].myReduce(getMax));
console.log([].myReduce(getMax, 1))