import './App.css';
import CalcThemeButtons from './components/CalcThemeButtons/CalcThemeButtons';
import CalcButtons from './components/CalcButtons/CalcButtons';
import { useState } from 'react';
import {
	sumNumbers,
	subtractNumbers,
	multiplyNumbers,
	divideNumbers,
	deleteNumber,
	resetResult,
} from './functions/calcFunctions';

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

	const calculateResult = (operation) => {
		switch (operation) {
			case '+':
				sumNumbers(
					result,
					setResult,
					setDisplayNumber,
					setTemporaryNumber,
					setAction
				);
				break;
			case '-':
				subtractNumbers(
					result,
					setResult,
					setDisplayNumber,
					setTemporaryNumber,
					setAction
				);
				break;
			case 'x':
				multiplyNumbers(
					result,
					setResult,
					setDisplayNumber,
					setTemporaryNumber,
					setAction
				);
				break;
			case '/':
				divideNumbers(
					result,
					setResult,
					setDisplayNumber,
					setTemporaryNumber,
					setAction
				);
				break;
			default:
				break;
		}
	};

	const deleteNumberHandler = () => {
		deleteNumber(
			result,
			temporaryNumber,
			action,
			setTemporaryNumber,
			setDisplayNumber,
			setResult
		);
	};

	const resetResultHandler = () => {
		resetResult(setTemporaryNumber, setResult, setDisplayNumber, setAction);
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
						deleteNumber={deleteNumberHandler}
						resetResult={resetResultHandler}
						numberEntered={numberEntered}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
