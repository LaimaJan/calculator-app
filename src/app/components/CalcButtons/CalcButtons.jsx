import './CalcButtons.css';
import PropTypes from 'prop-types';

function CalcButtons({
	currentTheme,
	handleButtonClick,
	handleClickAction,
	getResult,
	resetCalculator,
}) {
	return (
		<>
			<div className={`four-col-button-container ${currentTheme}-theme`}>
				<button
					className="button-type-one calculator-button"
					value={'7'}
					label={'7'}
					onClick={() => handleButtonClick('7')}
				>
					7
				</button>
				<button
					className="button-type-one calculator-button"
					value={'8'}
					label={'8'}
					onClick={() => handleButtonClick('8')}
				>
					8
				</button>
				<button
					className="button-type-one calculator-button"
					value={'9'}
					label={'9'}
					onClick={() => handleButtonClick('9')}
				>
					9
				</button>
				<button
					onClick={handleClickAction}
					className="button-type-two action-button"
					value={'DEL'}
					label={'DEL'}
				>
					DEL
				</button>
				<button
					className="button-type-one calculator-button"
					value={'4'}
					label={'4'}
					onClick={() => handleButtonClick('4')}
				>
					4
				</button>
				<button
					className="button-type-one calculator-button"
					value={'5'}
					label={'5'}
					onClick={() => handleButtonClick('5')}
				>
					5
				</button>
				<button
					className="button-type-one calculator-button"
					value={'6'}
					label={'6'}
					onClick={() => handleButtonClick('6')}
				>
					6
				</button>
				<button
					onClick={handleClickAction}
					className="button-type-one action-button"
					value={'+'}
					label={'+'}
				>
					+
				</button>
				<button
					className="button-type-one calculator-button"
					value={'1'}
					label={'1'}
					onClick={() => handleButtonClick('1')}
				>
					1
				</button>
				<button
					className="button-type-one calculator-button"
					value={'2'}
					label={'2'}
					onClick={() => handleButtonClick('2')}
				>
					2
				</button>
				<button
					className="button-type-one calculator-button"
					value={'3'}
					label={'3'}
					onClick={() => handleButtonClick('3')}
				>
					3
				</button>
				<button
					onClick={handleClickAction}
					className="button-type-one action-button"
					value={'-'}
					label={'-'}
				>
					-
				</button>
				<button
					className="button-type-one calculator-button"
					value={'.'}
					label={'.'}
					onClick={() => handleButtonClick('.')}
				>
					.
				</button>
				<button
					className="button-type-one calculator-button"
					value={'0'}
					label={'0'}
					onClick={() => handleButtonClick('0')}
				>
					0
				</button>
				<button
					onClick={handleClickAction}
					className="button-type-one action-button"
					value={'/'}
					label={'/'}
				>
					/
				</button>
				<button
					onClick={handleClickAction}
					className="button-type-one action-button"
					value={'x'}
					label={'x'}
				>
					x
				</button>
			</div>

			<div className={`two-col-button-container ${currentTheme}-theme`}>
				<button
					onClick={resetCalculator}
					className="button-type-two action-button"
					value={'RESET'}
					label={'RESET'}
				>
					RESET
				</button>
				<button
					onClick={getResult}
					className="button-type-three action-button"
					value={'='}
					label={'='}
				>
					=
				</button>
			</div>
		</>
	);
}

CalcButtons.propTypes = {
	currentTheme: PropTypes.string.isRequired,
	handleButtonClick: PropTypes.func.isRequired,
	handleClickAction: PropTypes.func.isRequired,
	getResult: PropTypes.func.isRequired,
	resetCalculator: PropTypes.func.isRequired,
};

export default CalcButtons;
