function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    let objValue = salaries[key];
    if ((objValue !== Infinity) && (objValue !== (-Infinity)) && (isNaN(objValue) === false) && (typeof objValue === 'number')) {
      sum = sum + objValue;
    }
  };
  return sum;
}
