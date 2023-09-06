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
import handleButton from './functions/handleButton';

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

	const handleButtonClick = (variable) => {
		handleButton(
			variable,
			action,
			displayNumber,
			result,
			temporaryNumber,
			setNumberEntered,
			setResult,
			setTemporaryNumber,
			setDisplayNumber
		);
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
		resetResult(
			setTemporaryNumber,
			setResult,
			setDisplayNumber,
			setAction,
			setNumberEntered
		);
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
						handleButton={handleButtonClick}
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
