function intersect(arrOne, arrTwo) {
  let result = [];
  for(let i=0; i<arrOne.length; i++) {
    if(arrTwo.indexOf(arrOne[i]) > -1) {
      result.push(arrOne[i]);
    }
  }
  if(result.length > 0) return result;
  return 'No intersecting values';
}

// returns [ 548458 ];
intersect([12,36,36,7547,45745754,548458], [325,3256,754,437,437,346,548458]);