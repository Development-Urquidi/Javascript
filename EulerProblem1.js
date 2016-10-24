var value = (1);
var sum = (0);
while(value < 1000) {
  if(value % 3 === 0){
    sum = value + sum;
    value = value + 1;
  }
  else{
    if(value % 5 === 0){
    sum = value + sum;
    value = value + 1;
  }
  else{value = value + 1;}
  }
}
if(value === 1000){console.log(sum);}
