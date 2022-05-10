function getMinMax(str) {
  // ваш код...
  let newStr = str.split(' ');
  let arr = newStr.filter(num => {
    let tNumb = Number(num);
    if ((isNaN(tNumb) === false) && (typeof tNumb === 'number')) {
      return Number(num);
    };
  });
  let result = {};
  result.max = Math.max(...arr);
  result.min = Math.min(...arr);

  return (result);
}
