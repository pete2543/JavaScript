function isValidIP(str) {
	let arr = str.split('.');
	if (str.includes(' ') || arr.length != 4) {
        return false;
    }
	return arr.every(num => {
		if((num > 255 || num < 0) || (num.length > 1 && num[0] === '0')|| (/[^0-9]/.test(num))) {
            return false;
        }
		return true;
	})
}
console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));
