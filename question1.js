function canNest(arr1, arr2){
	arr2.sort();
	let start = arr2[0];
	let end = arr2[1];

	let count = 0; 

	for (let i = 0 ; i < arr1.length ; i++){
		if ( start < arr1[i] && arr1[i] < end){
			count++;
		}
	}

	if (count == arr1.length){
		return true;
	} else return false;
}

canNest([1,2,3],[0,4]);