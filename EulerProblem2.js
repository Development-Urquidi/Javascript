//Problem statement: Find the sum of all EVEN Fibonacci numbers
//between 1 and 4,000,000.

var low = (0);
var mid = (0);
var high = (1);
var sum = (0);
while(high <= 4000000)
{
	if(high % 2 === 0) {sum = sum + high;}
		low = mid;
		mid = high;
		high = mid + low;
	}
if(high > 4000000){console.log(sum)}
