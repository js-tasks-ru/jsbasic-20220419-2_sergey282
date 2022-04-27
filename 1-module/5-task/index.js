function truncate(str, maxlength) {
  if (str.length >= maxlength) {
    s = str.slice(0, maxlength - 1) + "…";
    return s;
  } else {
    return str;
  }
}
