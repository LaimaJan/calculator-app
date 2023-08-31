import './App.css';
import CalcThemeButtons from './components/CalcThemeButtons/CalcThemeButtons';
import CalcButtons from './components/CalcButtons/CalcButtons';
import { useState, useEffect } from 'react';

function App() {
	const [currentTheme, setCurrentTheme] = useState('default');
	const [firstClickedNumber, setFirstClickedNumber] = useState('');
	const [secondClickedNumber, setSecondClickedNumber] = useState('');
	const [displayResultNumber, setDisplayResultNumber] = useState(0);
	const [currentAction, setCurrentAction] = useState('');
	const [clickedEqualSign, setClickedEqualSign] = useState(false);

	const changeTheme = (theme) => {
		setCurrentTheme(theme);
	};

	const handleButtonClick = (variable) => {
		if (currentAction === '') {
			if (variable === '.' && !firstClickedNumber.toString().includes('.')) {
				setFirstClickedNumber(
					(prevNumber) => prevNumber.toString() + '0' + variable
				);
			} else if (variable !== '.') {
				setFirstClickedNumber((prevNumber) => prevNumber.toString() + variable);
			}
		} else {
			if (variable === '.' && !secondClickedNumber.toString().includes('.')) {
				setSecondClickedNumber(
					(prevNumber) => prevNumber.toString() + '0' + variable
				);
			} else if (variable !== '.') {
				setSecondClickedNumber(
					(prevNumber) => prevNumber.toString() + variable
				);
			}
		}

		// if (variable && firstClickedNumber && !currentAction) {
		// 	setFirstClickedNumber('');
		// 	setSecondClickedNumber('');
		// 	currentAction('');
		// }
	};

	useEffect(() => {
		setDisplayResultNumber(firstClickedNumber);
		console.log('firstClickedNumber :', firstClickedNumber);
	}, [firstClickedNumber]);

	useEffect(() => {
		setDisplayResultNumber(secondClickedNumber);
		console.log('secondClickedNumber :', secondClickedNumber);
	}, [secondClickedNumber]);

	useEffect(() => {
		console.log('NEW RENDER');

		if (!firstClickedNumber) {
			setDisplayResultNumber('0');
		} else if (
			clickedEqualSign &&
			!isNaN(firstClickedNumber) &&
			!isNaN(secondClickedNumber)
		) {
			setDisplayResultNumber(firstClickedNumber + secondClickedNumber);
			setFirstClickedNumber(firstClickedNumber + secondClickedNumber);
			setSecondClickedNumber('');
			setCurrentAction('');
		}

		setClickedEqualSign(false);
		console.log('clickedEqualSign :', clickedEqualSign);
		console.log('currentAction in useEffect :', currentAction);
	}, [clickedEqualSign, firstClickedNumber, secondClickedNumber]);

	const handleClickAction = (action) => {
		const clickedAction = action.target.value;

		if (
			clickedAction === '+' ||
			clickedAction === '-' ||
			clickedAction === 'x' ||
			clickedAction === '/'
		) {
			setCurrentAction(clickedAction);
		} else console.log('Pick an action to do something with the numbers');
	};

	const resultByAction = (result) => {
		setDisplayResultNumber(result.toString());
		setFirstClickedNumber(result);
		setSecondClickedNumber('');
		setCurrentAction('');
	};

	const getResult = () => {
		setClickedEqualSign(true);
		if (currentAction === '+') {
			const result =
				parseFloat(firstClickedNumber) + parseFloat(secondClickedNumber);
			resultByAction(result);
		} else if (currentAction === '-') {
			const result =
				parseFloat(firstClickedNumber) - parseFloat(secondClickedNumber);
			resultByAction(result);
		} else if (currentAction === 'x') {
			const result =
				parseFloat(firstClickedNumber) * parseFloat(secondClickedNumber);
			resultByAction(result);
		} else if (currentAction === '/') {
			const result =
				parseFloat(firstClickedNumber) / parseFloat(secondClickedNumber);
			resultByAction(result);
		}
	};

	const deleteNumber = () => {
		if (secondClickedNumber && currentAction) {
			setSecondClickedNumber('');
		} else if (firstClickedNumber && !currentAction && !secondClickedNumber) {
			setFirstClickedNumber('');
			setClickedEqualSign(false);
			setCurrentAction('');
		}
	};

	const resetCalculator = () => {
		setFirstClickedNumber('');
		setSecondClickedNumber('');
		setDisplayResultNumber(0);
		setCurrentAction('');
		setClickedEqualSign(false);
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
					<p>{displayResultNumber}</p>
				</div>
				<div className="button-container">
					<CalcButtons
						currentTheme={currentTheme}
						handleButtonClick={handleButtonClick}
						handleClickAction={handleClickAction}
						getResult={getResult}
						resetCalculator={resetCalculator}
						deleteNumber={deleteNumber}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
