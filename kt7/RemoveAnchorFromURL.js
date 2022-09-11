// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
	const index = url.split('').findIndex((e, i) => e === '#');
	if (index > 0) {
		return url.split('').splice(0, index).join('');
	} else {
		return url;
	}
}
