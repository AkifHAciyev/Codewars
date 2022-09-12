// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
	let sumOfAll = array.reduce((total, e, i) => total + e, 0);
	if (array.length == 0) {
		return 0;
	} else {
		return sumOfAll / array.length;
	}
}
