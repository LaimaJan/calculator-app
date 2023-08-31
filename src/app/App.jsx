import './App.css';
import CalcThemeButtons from './components/CalcThemeButtons/CalcThemeButtons';
import CalcButtons from './components/CalcButtons/CalcButtons';
import { useState, useEffect } from 'react';

function App() {
	const [currentTheme, setCurrentTheme] = useState('default');
	const [firstClickedNumber, setFirstClickedNumber] = useState(0);
	const [secondClickedNumber, setSecondClickedNumber] = useState(0);
	const [displayResultNumber, setDisplayResultNumber] = useState(0);
	const [currentAction, setCurrentAction] = useState('');
	const [clickedEqualSign, setClickedEqualSign] = useState(false);

	const changeTheme = (theme) => {
		setCurrentTheme(theme);
	};

	const handleButtonClick = (variable) => {
		if (currentAction === '') {
			setFirstClickedNumber((prevNumber) => prevNumber * 10 + Number(variable));
		} else {
			setSecondClickedNumber(
				(prevNumber) => prevNumber * 10 + Number(variable)
			);
		}
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
		if (
			clickedEqualSign &&
			!isNaN(firstClickedNumber) &&
			!isNaN(secondClickedNumber)
		) {
			setDisplayResultNumber(
				(firstClickedNumber + secondClickedNumber).toString()
			);
			setFirstClickedNumber(firstClickedNumber + secondClickedNumber);
			setSecondClickedNumber(0);
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

	const getResult = () => {
		setClickedEqualSign(true);
		if (currentAction === '+') {
			console.log('currentAction :', currentAction);
			setDisplayResultNumber(firstClickedNumber + secondClickedNumber);
			setFirstClickedNumber(firstClickedNumber + secondClickedNumber);
			setSecondClickedNumber(0);
			setCurrentAction('');
		} else if (currentAction === '-') {
			setDisplayResultNumber(firstClickedNumber - secondClickedNumber);
			setFirstClickedNumber(firstClickedNumber - secondClickedNumber);
			setSecondClickedNumber(0);
			setCurrentAction('');
		} else if (currentAction === 'x') {
			setDisplayResultNumber(firstClickedNumber * secondClickedNumber);
			setFirstClickedNumber(firstClickedNumber * secondClickedNumber);
			setSecondClickedNumber(0);
			setCurrentAction('');
		} else if (currentAction === '/') {
			setDisplayResultNumber(firstClickedNumber / secondClickedNumber);
			setFirstClickedNumber(firstClickedNumber / secondClickedNumber);
			setSecondClickedNumber(0);
			setCurrentAction('');
		}
	};

	const resetCalculator = () => {
		setFirstClickedNumber(0);
		setSecondClickedNumber(0);
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
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
