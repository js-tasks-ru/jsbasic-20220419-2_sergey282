function camelize(str) {
  if (!str) {
    return;
  }
  str.split.map;

  return str;
}


function camelize(str) {
  if (!str) {
    return str;
  }

  return str
    .split('-')
    .map((part, index) => {
      if (index === 0) {
        return part;
      }
      let changeFirstL = part.slice(0, 1);
      let nextPart = part.slice(1);

      return `${changeFirstL.toUpperCase()}${nextPart}`;
    })
    .join('');


}
