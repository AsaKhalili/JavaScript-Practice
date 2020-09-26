function findAmanj(str){
  let amanj = 'Amanj';
  let flag = 0;
  
  for (let i = 0; i < amanj.length; i++){
    if( str[i] === amanj[i] ){
      flag = 0;
    } else{
      flag += 1;
    }
  }

  if (flag === 0){
    console.log('The string starts wiht Amanj.');
  } else{
    console.log('This string doesn\'t start with Amanj.');
  }
}

findAmanj('AmanjAcademy');
findAmanj('HellowWorld');