function repeatStr (n, s) {
  if (n > 0){
    return s.repeat(n)
  } else {
    return ""
  }
}

alert(repeatStr('abc', 3 ))