function timeDiff(d1, d2){
	let t1 = d1.getTime();
	let t2 = d2.getTime();
	let diff = Math.abs(t1 - t2);

	let secondsInADay = 86400;
	return( (Math.round(diff/secondsInADay))/1000);
}

let date1 = new Date("June 14, 2020");
let date2 = new Date("June 20, 2020");


timeDiff(date1, date2);