function calcMin(num){
  //This function calculates minutes from a number representing seconds
  let minutes = num / 60; 
  return minutes;
}

function calcHours(num){
  let hours = num / 3600;
  return hours;
}

function calcDays(num){
  let days = num/ (24*3600);
  return days;
}

function secondsToObj(seconds){
  let mn = calcMin(seconds);
  let hr = calcHours(seconds);
  let dy = calcDays(seconds);

  let ob = {
    'Minutes': mn,
    'Hours': hr,
    'Days': dy
  };

  return ob;

}

secondsToObj(5600000);