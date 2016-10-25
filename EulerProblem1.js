// Problem statement: Find the sum of all values divisible by
// 3 and/or 5 but less than 1,000.

var value = (1);
var sum = (0);
while(value < 1000) {
  if(value % 3||5 === 0){sum = value + sum;}
  value = value + 1;
  }
if(value === 1000){console.log(sum);}
