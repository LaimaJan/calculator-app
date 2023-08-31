import './CalcThemeButtons.css';
import PropTypes from 'prop-types';
// import { useState } from 'react';

function CalcThemeButtons({ buttonOne, buttonTwo, buttonThree, currentTheme }) {
	return (
		<div className={`calc-name-theme-container ${currentTheme}-theme`}>
			<div className="calc-name">
				<p>calc</p>
			</div>
			<div className="calc-theme-button-container">
				<p>THEME</p>

				<div className={`theme-container ${currentTheme}-theme`}>
					<div className="theme-button-container">
						<div
							className={`${currentTheme}-theme red-button`}
							onClick={buttonThree}
						/>
					</div>

					<div className="legend-text-container">
						<div className="legendText" onClick={buttonOne}>
							1
						</div>
						<div className="legendText" onClick={buttonTwo}>
							2
						</div>
						<div className="legendText" onClick={buttonThree}>
							3
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

CalcThemeButtons.propTypes = {
	buttonOne: PropTypes.func.isRequired,
	buttonTwo: PropTypes.func.isRequired,
	buttonThree: PropTypes.func.isRequired,
	currentTheme: PropTypes.string.isRequired,
};

export default CalcThemeButtons;
