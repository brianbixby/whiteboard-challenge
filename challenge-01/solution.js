function myfunction(arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  let avg = arr.reduce((acc, cur) => {
    return cur += acc;
  })/arr.length;
  return {
    max: max,
    min: min,
    avg: avg
  };
}
// returns { max: 18, min: 2, avg: 9 }
myfunction([2,3,5,9,17,18]);