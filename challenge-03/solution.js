let testEngine = {
  value: 2,
  next: {
    value: 10,
    next: {
      value: 30
    }
  }
}

const traverse = (engine) => {
  let passengers = [engine.value];
  let currentLocation = 'engine.next';
  while(eval(currentLocation)) {
    passengers.push(+eval(currentLocation).value);
    currentLocation += '.next';
  }
  return passengers.reduce((acc, cur) =>  acc + cur);
}

// returns 42
traverse(testEngine);