module.exports = function reverse (n) {
  n = String(n);
  let arr = n.split('');
  if (arr[0] == '-') {
    arr.shift();
  }
  arr.reverse();
  let newN = arr.join('');
  return newN;
}
