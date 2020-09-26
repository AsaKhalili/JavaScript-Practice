function fooBar(num){
  if ( num % 3 === 0 && num % 5 !== 0){
    console.log('Foo');
  } else if ( num % 5 === 0 && num % 3 !== 0){
    console.log('Bar');
  } else if ( num % 3 === 0 && num % 5 === 0){
    console.log('FooBar');
  } else {
    console.log('Neither is true!');
  }
}

fooBar(9) //Foo
fooBar(10) //Bar
fooBar(15) //FooBar