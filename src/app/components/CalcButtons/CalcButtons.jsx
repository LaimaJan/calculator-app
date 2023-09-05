import './CalcButtons.css';
import PropTypes from 'prop-types';

function CalcButtons({
	currentTheme,
	handleButton,
	getAction,
	getFinalResult,
	deleteNumber,
	resetResult,
	numberEntered,
}) {
	return (
		<>
			<div className={`four-col-button-container ${currentTheme}-theme`}>
				<button
					className="button-type-one calculator-button"
					value={'7'}
					label={'7'}
					onClick={() => {
						handleButton('7');
					}}
				>
					7
				</button>
				<button
					className="button-type-one calculator-button"
					value={'8'}
					label={'8'}
					onClick={() => handleButton('8')}
				>
					8
				</button>
				<button
					className="button-type-one calculator-button"
					value={'9'}
					label={'9'}
					onClick={() => handleButton('9')}
				>
					9
				</button>
				<button
					className="button-type-two action-button"
					value={'DEL'}
					label={'DEL'}
					onClick={() => deleteNumber()}
				>
					DEL
				</button>
				<button
					className="button-type-one calculator-button"
					value={'4'}
					label={'4'}
					onClick={() => handleButton('4')}
				>
					4
				</button>
				<button
					className="button-type-one calculator-button"
					value={'5'}
					label={'5'}
					onClick={() => handleButton('5')}
				>
					5
				</button>
				<button
					className="button-type-one calculator-button"
					value={'6'}
					label={'6'}
					onClick={() => handleButton('6')}
				>
					6
				</button>
				<button
					className="button-type-one action-button"
					value={'+'}
					label={'+'}
					onClick={() => {
						if (numberEntered) {
							getAction('+');
						}
					}}
				>
					+
				</button>
				<button
					className="button-type-one calculator-button"
					value={'1'}
					label={'1'}
					onClick={() => handleButton('1')}
				>
					1
				</button>
				<button
					className="button-type-one calculator-button"
					value={'2'}
					label={'2'}
					onClick={() => handleButton('2')}
				>
					2
				</button>
				<button
					className="button-type-one calculator-button"
					value={'3'}
					label={'3'}
					onClick={() => handleButton('3')}
				>
					3
				</button>
				<button
					className="button-type-one action-button"
					value={'-'}
					label={'-'}
					onClick={() => {
						if (numberEntered) {
							getAction('-');
						}
					}}
				>
					-
				</button>
				<button
					className="button-type-one calculator-button"
					value={'.'}
					label={'.'}
					onClick={() => handleButton('.')}
				>
					.
				</button>
				<button
					className="button-type-one calculator-button"
					value={'0'}
					label={'0'}
					onClick={() => handleButton('0')}
				>
					0
				</button>
				<button
					className="button-type-one action-button"
					value={'/'}
					label={'/'}
					onClick={() => {
						if (numberEntered) {
							getAction('/');
						}
					}}
				>
					/
				</button>
				<button
					className="button-type-one action-button"
					value={'x'}
					label={'x'}
					onClick={() => {
						if (numberEntered) {
							getAction('x');
						}
					}}
				>
					x
				</button>
			</div>

			<div className={`two-col-button-container ${currentTheme}-theme`}>
				<button
					className="button-type-two action-button"
					value={'RESET'}
					label={'RESET'}
					onClick={() => resetResult()}
				>
					RESET
				</button>
				<button
					className="button-type-three action-button"
					value={'='}
					label={'='}
					onClick={() => getFinalResult()}
				>
					=
				</button>
			</div>
		</>
	);
}

CalcButtons.propTypes = {
	currentTheme: PropTypes.string.isRequired,
	numberEntered: PropTypes.bool.isRequired,
	handleButton: PropTypes.func.isRequired,
	getAction: PropTypes.func.isRequired,
	getFinalResult: PropTypes.func.isRequired,
	deleteNumber: PropTypes.func.isRequired,
	resetResult: PropTypes.func.isRequired,
};

export default CalcButtons;
