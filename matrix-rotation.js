alert("3. MATRIX ROTATION");//show to the user
console.log("\n \n");
console.log("3. MATRIX ROTATION")
var r = 1;

numberOfRow();//call number of row that user must be input
function numberOfRow() {
	m = parseInt(prompt('Number of row :'));//getting input 
	if (m<2 || m>300 || isNaN(m)) {
		alert("Number of row should betweeen 2 - 300!");//show error if inputed value is not valid
		numberOfRow();//callback number of row
	}
}

numberOfColumn()//calling function
function numberOfColumn() {
	n = parseInt(prompt('Number of column : '));//getting input
	if (n<2 || n>300 || isNaN(n)) {
		alert("Number of column should betweeen 2 - 300!");//show error if inputed value is not valid
		numberOfColumn();//callback
	}
}

var a = [];//init array a
var c = [];//init array c

enterMatrix();//calling function
function enterMatrix() {
	for (i=0; i<m; i++) {
		//getting value sparated by spaces
		a[i] = prompt('Enter value in row ' + (i+1) + ' (input ' + n + ' column separated by spaces)').split(' ').map(Number);
		if (a[i].length != n) {
			alert("Number of column should be " + n + "!");//show error to user that input is not valid
			enterMatrix();//callback entering matrix
		}
	}
}

var b = [];
for (i=0; i<m; i++) {
	console.log(a[i]);
	b[i] = a[i];
}
var c = new Array(m);
for (var i = 0; i < m; i++) {
	c[i] = new Array(n);
}
for (i=0; i<m; i++) {
	if (i==0) {
		for (j=0; j<n; j++) {
			if (j == n-1) {
				c[i][j] = a[i+1][j];
			}
			else {
				c[i][j] = a[i][j+r];
			}
		}
	}
	else if (i== m-1) {
		for (j=0; j<n; j++) {
			if (j == 0) {
				c[i][j] = b[i-r][j];
			}
			else {
				c[i][j] = b[i][j-r];
			}
		}
	}
	else {
		for (j=0; j<n; j++) {
			if (j == 0) {
				if (i < r ) {
					c[i][j] = b[i-r+1][j+1];
				}
				else {
					c[i][j] = b[i-r][j];
				}
			}
			if (j == n-1) {
				if (i < r ) {
					c[i][j] = a[i+r-1][j-1];	
				}
				else {
					c[i][j] = a[i+r][j];
				}
			}
			else {
				// c[i][j] = b[i][j-r];
			}
		}
	}
}

console.log("Rotate " + r + " : ");
for (i=0; i<m; i++) {
	console.log(c[i]);
}