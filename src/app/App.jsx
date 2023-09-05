import './App.css';
import CalcThemeButtons from './components/CalcThemeButtons/CalcThemeButtons';
import CalcButtons from './components/CalcButtons/CalcButtons';
import { useState } from 'react';

function App() {
	const [currentTheme, setCurrentTheme] = useState('default');
	const [result, setResult] = useState('');
	const [temporaryNumber, setTemporaryNumber] = useState('');
	const [displayNumber, setDisplayNumber] = useState('0');
	const [action, setAction] = useState('');
	const [numberEntered, setNumberEntered] = useState(false);

	const changeTheme = (theme) => {
		setCurrentTheme(theme);
	};

	const handleButton = (variable) => {
		const number = variable;

		if (number === '.' && displayNumber.includes('.')) {
			return;
		}

		if (!action) {
			if (number === '0' && displayNumber === '0') {
				return;
			} else if (number === '.' && displayNumber === '0') {
				const updatedResult = '0' + number;
				setResult(updatedResult);
				setDisplayNumber(updatedResult);
			} else {
				const updatedResult = result + number;

				setResult(updatedResult);
				setDisplayNumber(updatedResult);

				setNumberEntered(true);
			}
		} else {
			if (number === '.' && !temporaryNumber.includes('.')) {
				const updatedTemporaryNumber = '0' + number;
				setTemporaryNumber(updatedTemporaryNumber);
				setDisplayNumber(updatedTemporaryNumber);
			} else if (temporaryNumber === '0' && !temporaryNumber.includes('.')) {
				const updatedTemporaryNumber = number;
				setTemporaryNumber(updatedTemporaryNumber);
				setDisplayNumber(updatedTemporaryNumber);
			} else {
				const updatedTemporaryNumber = temporaryNumber + number;
				setTemporaryNumber(updatedTemporaryNumber);
				setDisplayNumber(updatedTemporaryNumber);
			}
		}
	};

	const getAction = (calculatorAction) => {
		setAction(calculatorAction);
	};

	const calculateResult = (action) => {
		const calculatorAction = action;

		switch (calculatorAction) {
			case '+':
				sumNumbers();

				break;
			case '-':
				subtractNumbers();

				break;
			case 'x':
				multiplyNumbers();

				break;
			case '/':
				divideNumbers();
				break;

			default:
				break;
		}
	};

	const sumNumbers = () => {
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

	const subtractNumbers = () => {
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

	const multiplyNumbers = () => {
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

	const divideNumbers = () => {
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

	const deleteNumber = () => {
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

	const resetResult = () => {
		setTemporaryNumber('');
		setResult('');
		setDisplayNumber('0');
		setAction('');
	};

	const getFinalResult = () => {
		calculateResult(action);
	};

	return (
		<div className={`App ${currentTheme}-theme`}>
			<div className="calc-container">
				<CalcThemeButtons
					buttonThree={() => changeTheme('theme3')}
					buttonTwo={() => changeTheme('theme2')}
					buttonOne={() => changeTheme('theme1')}
					currentTheme={currentTheme}
				/>
				<div className="display-result-container">
					<p>{displayNumber}</p>
				</div>
				<div className="button-container">
					<CalcButtons
						currentTheme={currentTheme}
						handleButton={handleButton}
						getAction={getAction}
						getFinalResult={getFinalResult}
						deleteNumber={deleteNumber}
						resetResult={resetResult}
						numberEntered={numberEntered}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
