export const sumNumbers = (
	result,
	setResult,
	setDisplayNumber,
	setTemporaryNumber,
	setAction
) => {
	const num1 = parseFloat(result);

	setTemporaryNumber((prevNumberTwo) => {
		const num2 = parseFloat(prevNumberTwo);

		if (!isNaN(num1) && !isNaN(num2)) {
			const sum = num1 + num2;

			setResult(sum);

			setDisplayNumber(sum);

			setTemporaryNumber('');
			setAction('');

			return String(sum);
		}

		return prevNumberTwo;
	});
};

export const subtractNumbers = (
	result,
	setResult,
	setDisplayNumber,
	setTemporaryNumber,
	setAction
) => {
	const num1 = parseFloat(result);

	setTemporaryNumber((prevNumberTwo) => {
		const num2 = parseFloat(prevNumberTwo);

		if (!isNaN(num1) && !isNaN(num2)) {
			const subraction = num1 - num2;
			setResult(subraction);
			setDisplayNumber(subraction);

			setTemporaryNumber('');
			setAction('');

			return String(subraction);
		}

		return prevNumberTwo;
	});
};

export const multiplyNumbers = (
	result,
	setResult,
	setDisplayNumber,
	setTemporaryNumber,
	setAction
) => {
	const num1 = parseFloat(result);

	setTemporaryNumber((prevNumberTwo) => {
		const num2 = parseFloat(prevNumberTwo);

		if (!isNaN(num1) && !isNaN(num2)) {
			const multiplication = num1 * num2;
			setResult(multiplication);
			setDisplayNumber(multiplication);

			setTemporaryNumber('');
			setAction('');

			return String(multiplication);
		}

		return prevNumberTwo;
	});
};

export const divideNumbers = (
	result,
	setResult,
	setDisplayNumber,
	setTemporaryNumber,
	setAction
) => {
	const num1 = parseFloat(result);

	setTemporaryNumber((prevNumberTwo) => {
		const num2 = parseFloat(prevNumberTwo);

		if (!isNaN(num1) && !isNaN(num2)) {
			const division = num1 / num2;
			setResult(division);
			setDisplayNumber(division);

			setTemporaryNumber('');
			setAction('');

			return String(division);
		}

		return prevNumberTwo;
	});
};

export const deleteNumber = (
	result,
	temporaryNumber,
	action,
	setTemporaryNumber,
	setDisplayNumber,
	setResult
) => {
	if (result && temporaryNumber && action) {
		setTemporaryNumber('');
		setDisplayNumber(result);
	} else if (result && !temporaryNumber && !action) {
		setResult('');
		setDisplayNumber('0');
	} else if (result && !temporaryNumber && action) {
		setResult('');
		setDisplayNumber('0');
	}
};

export const resetResult = (
	setTemporaryNumber,
	setResult,
	setDisplayNumber,
	setAction
) => {
	setTemporaryNumber('');
	setResult('');
	setDisplayNumber('0');
	setAction('');
};
