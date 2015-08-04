function recurseFib(n){
  if(n < 2){
    return n;
  }
  else{
    return recurseFib(n - 1) + recurseFib(n - 2);
  }
}

//  F0 = 0
//  F1 = 1
//  F2 = 1
//  F3 = 2
//  F4 = 3
//  F5 = 5
//  F6 = 8

console.log(recurseFib(6));