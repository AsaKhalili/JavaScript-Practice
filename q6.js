function findSimilar(arr1, arr2){
  let similar = [];
  if (arr1.length < arr2.length){
    let c = arr2; 
    arr2 = arr1;
    arr1 = c;
  }


  for ( let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      if ( arr1[i] === arr2[j]){
        similar.push(arr1[i]);
      } else { continue; }
    }
  }

  return similar;
}

findSimilar([1,2,3], [2,3,4,5,6,7]); //[2,3]
findSimilar([1,2,3,4,5,6], [3,4,6,7]); //[3,4,6]
findSimilar([1,2,5],[3,4,5]); //[5]