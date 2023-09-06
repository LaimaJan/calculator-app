export const handleButton = (
	number,
	action,
	displayNumber,
	result,
	temporaryNumber,
	setNumberEntered,
	setResult,
	setTemporaryNumber,
	setDisplayNumber
) => {
	if (number === '.' && displayNumber.includes('.')) {
		return;
	}

	if (!action) {
		if (number === '0' && displayNumber === '0') {
			console.log('kas vyksta');
			return;
		} else if (number === '.' && displayNumber === '0') {
			console.log('kas cia dabar 22');
			const updatedResult = '0' + number;
			setResult(updatedResult);
			setDisplayNumber(updatedResult);
		} else {
			console.log('kas 333333');
			const updatedResult = result + number;
			setResult(updatedResult);
			setDisplayNumber(updatedResult);
			setNumberEntered(true);
		}
	} else {
		if (number === '.' && !temporaryNumber.includes('.')) {
			console.log('kas 4444444');
			const updatedTemporaryNumber = '0' + number;
			setTemporaryNumber(updatedTemporaryNumber);
			setDisplayNumber(updatedTemporaryNumber);
		} else if (temporaryNumber === '0' && !temporaryNumber.includes('.')) {
			console.log('kas 5555555');
			const updatedTemporaryNumber = number;
			setTemporaryNumber(updatedTemporaryNumber);
			setDisplayNumber(updatedTemporaryNumber);
		} else {
			console.log('kas 666666');
			const updatedTemporaryNumber = temporaryNumber + number;
			setTemporaryNumber(updatedTemporaryNumber);
			setDisplayNumber(updatedTemporaryNumber);
		}
	}
};

export default handleButton;
