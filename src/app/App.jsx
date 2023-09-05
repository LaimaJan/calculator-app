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
		const actionNow = currentAction;
		console.log(actionNow);

		if (!currentAction) {
			// If no action is selected
			if (variable === '.' && !firstClickedNumber.includes('.')) {
				setFirstClickedNumber((prevNumber) => prevNumber + variable);
				setDisplayResultNumber((prevNumber) => prevNumber + variable);
			} else if (actionNow === '-') {
				setFirstClickedNumber('-' + firstClickedNumber);
				setDisplayResultNumber('-' + displayResultNumber);
			} else if (/^-?[0-9]*\.?[0-9]*$/.test(firstClickedNumber + variable)) {
				const updatedNumber = firstClickedNumber + variable;
				setFirstClickedNumber(updatedNumber);
				setDisplayResultNumber(updatedNumber);
			}
		} else if (currentAction) {
			// If an action is selected
			if (variable === '.' && !secondClickedNumber.includes('.')) {
				setSecondClickedNumber((prevNumber) => prevNumber + variable);
				setDisplayResultNumber((prevNumber) => prevNumber + variable);
			} else if (variable === '-' && !secondClickedNumber.includes('-')) {
				setSecondClickedNumber('-' + secondClickedNumber);
				setDisplayResultNumber('-' + displayResultNumber);
			} else if (/^-?[0-9]*\.?[0-9]*$/.test(secondClickedNumber + variable)) {
				const updatedNumber = secondClickedNumber + variable;
				setSecondClickedNumber(updatedNumber);
				setDisplayResultNumber(updatedNumber);
			}
		}
	};

	// const handleButtonClick = (variable) => {
	// 	if (clickedEqualSign) {
	// 		setFirstClickedNumber(variable);
	// 		setSecondClickedNumber('');
	// 		setDisplayResultNumber(variable);
	// 		setClickedEqualSign(false);
	// 	} else if (!currentAction) {
	// 		if (
	// 			(firstClickedNumber === '0' && variable === '.') ||
	// 			(variable === '.' && !firstClickedNumber.includes('.'))
	// 		) {
	// 			setFirstClickedNumber('0.');
	// 			setDisplayResultNumber('0.');
	// 		} else {
	// 			const updatedNumber = `${firstClickedNumber}${variable}`;
	// 			setFirstClickedNumber(updatedNumber);
	// 			setDisplayResultNumber(updatedNumber);
	// 		}
	// 	} else if (currentAction) {
	// 		if (
	// 			(secondClickedNumber === '0' && variable === '.') ||
	// 			(variable === '.' && !secondClickedNumber.includes('.'))
	// 		) {
	// 			setSecondClickedNumber('0.');
	// 			setDisplayResultNumber('0.');
	// 		} else {
	// 			const updatedNumber = `${secondClickedNumber}${variable}`;
	// 			setSecondClickedNumber(updatedNumber);
	// 		}
	// 	}
	// };

	useEffect(() => {
		setDisplayResultNumber(firstClickedNumber);
	}, [firstClickedNumber]);

	useEffect(() => {
		setDisplayResultNumber(secondClickedNumber);
	}, [secondClickedNumber]);

	useEffect(() => {
		console.log('NEW RENDER');

		if (
			!firstClickedNumber &&
			!secondClickedNumber &&
			!currentAction &&
			!clickedEqualSign
		) {
			setDisplayResultNumber('0');
		} else if (
			clickedEqualSign &&
			!isNaN(firstClickedNumber) &&
			!isNaN(secondClickedNumber)
		) {
			console.log('USEFEKTE11111');
			setDisplayResultNumber(firstClickedNumber + secondClickedNumber);
			setFirstClickedNumber(firstClickedNumber + secondClickedNumber);
			setSecondClickedNumber('');
			setCurrentAction('');
		} else if (
			!clickedEqualSign &&
			currentAction &&
			firstClickedNumber &&
			!secondClickedNumber
		) {
			console.log('PERPANAUDOJAM VISKA');
			setDisplayResultNumber(firstClickedNumber + secondClickedNumber);
			setFirstClickedNumber(firstClickedNumber + secondClickedNumber);
			setSecondClickedNumber('');
		}

		setClickedEqualSign(false);
		console.log('clickedEqualSign :', clickedEqualSign);
		console.log('currentAction in useEffect :', currentAction);
		console.log('firstClickedNumber :', firstClickedNumber);
		console.log('secondClickedNumber :', secondClickedNumber);
		console.log('displayedNumber :', displayResultNumber);
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
		if (firstClickedNumber && secondClickedNumber && currentAction) {
			console.log('ISTRINAM ANTRAJI SKAICIUKA');
			setSecondClickedNumber('');
			setFirstClickedNumber(firstClickedNumber);
			setDisplayResultNumber(firstClickedNumber);
			setClickedEqualSign(false);
		} else if (firstClickedNumber && !currentAction && !secondClickedNumber) {
			console.log('ISTRINAM PIRMAJI SKAICIUKA1111111');
			setFirstClickedNumber('');
			setClickedEqualSign(false);
			setCurrentAction('');
		} else if (firstClickedNumber && currentAction && !secondClickedNumber) {
			console.log('ISTRINAM PIRMAJI SKAICIUKA222222222');
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
