alert("2. SORTING");
console.log("\n \n");
console.log("2. SORTING");

enterSizeOfArray();//calling function to get input of array

function enterSizeOfArray() {
	n = parseInt(prompt("Enter size of the array"));//getting size of array from user
	if (n<2 || n>100000 || isNaN(n)) {
		alert("Size of array should betweeen 2 - 100,000!");//show error when user inputed wrong format
		enterSizeOfArray();//call function to getting array or fill the array
	}
	else {
		enterNumbersOfArray();
	}
}

function enterNumbersOfArray() {
	arr = prompt("Enter " + n + " numbers separated by spaces").split(" ");//get inputed array from user sparated by space
	arr = arr.map(Number);//define splited string into array
	var checkArray = true;//boolean to checking array

	//do validation of array  that value is not more than 1000000
	for (i=0; i<arr.length; i++) {
		if (arr[i]<0 || arr[i]>1000000 || isNaN(arr[i])) {
			checkArray = checkArray && false;
		}
		else {
			checkArray = checkArray && true;
		}
	}

	if (!checkArray) {
		alert("Number should between 0 - 1,000,000!");//show error to user
		enterNumbersOfArray();//callback entering number of array because is not valid input
	}

	else {
		if (arr.length != n) {
			alert("Enter " + n + " numbers of array!");//show to user how much number must to be input
			enterNumbersOfArray();//callback function number of array
		}
		else {
			sortingArray();//doing sort array 	
		}	
	}
}

function sortingArray() {
	var asc = true;

	// Case 1: If the array is already sorted, output yes on the first line. You do not need to output anything else.
	for (i=0; i<arr.length; i++) {
		if (arr[i] < arr[i+1]) {
			asc = asc && true;
		} 
		else if (arr[i] > arr[i+1]) {
			asc = asc && false;
		}
		else if (arr[i] == arr[i+1]) {
			asc = asc && false;
		}
	}

	if (asc) {
		console.log("yes");
	}

	else {
		// Case 2: If you can sort the array by swapping dl and dr, output swap l r in the second line.
		// Case 3: If an array can be sorted by either swapping or reversing, stick to the swap-based method.
		asc = true;
		var arrSwap = [];
		var big;
		var biggest;
		for (i=arr.length-1; i>=0; i--) {
			if (arr[i] < arr[i-1]) {
				biggest = arr[i-1];
				big = i-1;
			}
		}

		var smallest = arr[big];
		var small;
		for (i=big+1; i<arr.length; i++) {
			if (arr[i] < smallest) {
				smallest = arr[i];
				small = i;
			}
		}
		for (i=0; i<arr.length; i++) {
			if  (arr[i] == biggest) {
				arrSwap[i] = arr[small];
			}
			else if (arr[i] == smallest) {
				arrSwap[i] = arr[big];
			}
			else {
				arrSwap[i] = arr[i];
			}
		}
		for (i=0; i<arrSwap.length; i++) {
			if (arrSwap[i] < arrSwap[i+1]) {
				asc = asc && true;
			} 
			else if (arrSwap[i] > arrSwap[i+1]) {
				asc = asc && false;
			}
			else if (arrSwap[i] == arrSwap[i+1]) {
				asc = asc && false;
			}
		}

		if (asc) {
			console.log("yes");
			console.log("swap " + (big+1) + " " + (small+1));
		}
		else {
			// Case 4: if it is possible to sort the array by reversing the segment d[l...r], output reverse l r in the second line.
			var arr1 = [];
			var arrReverse = [];
			if (big == undefined) {
				big = 0;
			}
			i = big;
			if (arr[small+1] == undefined) {
				for (i; i<=small; i++) {
					arr1[i] = arr[i];
				}
			}
			else {
				while (arr[small+1]>arr[i]) {
					arr1[i] = arr[i];
					i++
				}
			}
			
			function reverseArr(input) {
				var ret = new Array;
				for(var i = input.length-1; i >= 0; i--) {
		    	// if  (input[i] == undefined) {
		    	// 	input
		    	// }
		    	ret.push(input[i]);
		    }
		    return ret;
		}
		arr1 = reverseArr(arr1);
		arr1 = arr1.splice(0,arr1.length-big);
		var arr2 = [];
		var arr3 = [];
		for (i=0; i<big; i++) {
			arr2[i] = arr[i];
		}
		var startBig = big+arr1.length;
		for (i=startBig; i<arr.length; i++) {
			arr3[i] = arr[i];
		}
		arr3 = arr3.splice(startBig,arr3.length-arr2.length-arr1.length);
		arrReverse = arr2.concat(arr1).concat(arr3);

		asc = true;
		for (i=0; i<arrReverse.length; i++) {
			if (arrReverse[i] < arrReverse[i+1]) {
				asc = asc && true;
			} 
			else if (arrReverse[i] > arrReverse[i+1]) {
				asc = asc && false;
			}
			else if (arrReverse[i] == arrReverse[i+1]) {
				asc = asc && false;
			}
		}

		if (asc) {
			console.log("yes");
			console.log("reverse " + (big+1) + " " + (small+1));
		}
		else {
				// Case 4: If you cannot sort the array in either of the above ways, output no in the first line.
				console.log("no");
			}
		}
	}	
}	