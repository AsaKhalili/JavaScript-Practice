function toStringArr(arr){
  let str = '';
  for ( let i = 0; i < arr.length; i++){
    str += arr[i];
  }

  return str;
}

toStringArr(['a','b','c','d']);