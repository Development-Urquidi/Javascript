var prevalue = (0);
var value = (1);
var sum = (0);
while(value <= 4000000){
	if(value % 2 === 0){
		sum = sum + value;
		prevalue = prevalue + value;
		value = value + prevalue;
	}
	else {
	   sum = sum;
	   prevalue = value + prevalue;
	   value = value + prevalue;
       }
		}
if(value >= 4000000){console.log = sum;}
