// Solution 1
alert("1. FACTORIALS");
console.log("1. FACTORIALS");
var N = prompt("Input Factorial: ");//get input from user
//init function
function factorial(N) {
	if (N == 0) {
		return 1;
	}
	return toFix(N * factorial(N - 1)); //tofix is to avoid scientific notation for large numbers
}
function toFix(i){
	var str='';
	do{
		let a = i%10;
		i=Math.trunc(i/10);
		str = a+str;
	}while(i>0)
	return str;
}
console.log("Factorial N = " + factorial(N)); //show the result to console

/*
Explanation:

For an input N = 3
factorial_1(3) 
return 3 * factorial_1( return 2 * factorial_1( return 1 * factorial_1( return 1)))
-> 1 * 1 * 2 * 3 = 6

*/

