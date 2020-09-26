function charCount(c, str) {
	let count = 0;
	str.toLowerCase();
	c.toLowerCase();
	for (let i = 0; i < str.length ; i++){
		if ( str[i] == c){
			count++;
		}
	}

	return count;
}

charCount('a', 'that is fair');