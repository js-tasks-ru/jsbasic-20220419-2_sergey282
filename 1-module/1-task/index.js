function factorial(n) {
  if (n < 0) {
    console.log('Error! Factorial for negative number does not exist.');
  }
  else if (n === 0 || n === 1) {
    return 1;
  }

  else {
    let fact = 1;
    for (i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
}
