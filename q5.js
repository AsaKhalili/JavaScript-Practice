function findTrue(arr){
  arr1 = [];
  for ( let i = 0; i < arr.length; i++){
    if (arr[i] === 'true' || arr[i] === 'True'){
      arr1.push(i);
    } else {
      continue;
    }
  }

  return arr1;
}

findTrue(['true','false','true','true']); // [0,2,3]