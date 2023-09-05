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
	console.log('action :', action);

	const changeTheme = (theme) => {
		setCurrentTheme(theme);
	};

	const handleButton = (variable) => {
		const number = variable;

		if (!action) {
			console.log('numberOne :', number);
			setResult(number);
			setDisplayNumber(number);
		} else {
			console.log('numberTwo :', number);
			setTemporaryNumber(number);
			setDisplayNumber(number);

			calculateResult();
		}
	};

	const getAction = (calculatorAction) => {
		console.log('getting the action :', calculatorAction);
		setAction(calculatorAction);
	};

	const calculateResult = () => {
		const calculatorAction = action;

		console.log('calculateResult function in action:', calculatorAction);

		switch (calculatorAction) {
			case '+':
				sumNumbers();

				break;
			case '-':
				subtractNumbers();

				break;
			case '*':
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

				console.log('sumNumbers:', sum);

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

				console.log('subraction:', subraction);

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

				console.log('multiplication:', multiplication);

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

				console.log('division:', division);

				setTemporaryNumber('');
				setAction('');

				return String(division);
			}

			return prevNumberTwo;
		});
	};

	const deleteNumber = () => {
		console.log('delete working');
		if (result && temporaryNumber && action) {
			setTemporaryNumber('');
			displayNumber(result);
		} else if (result && !temporaryNumber && !action) {
			console.log('aaaaa');
			setResult('');
			setDisplayNumber('0');
		} else if (result && !temporaryNumber && action) {
			console.log('aaaaa');
			setResult('');
			setDisplayNumber('0');
		}
	};

	const resetResult = () => {
		console.log('reset working');
		setTemporaryNumber('');
		setResult('');
		setDisplayNumber('0');
		setAction('');
	};

	const getFinalResult = () => {
		console.log('getFinalResult:');

		setDisplayNumber(result);
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
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
