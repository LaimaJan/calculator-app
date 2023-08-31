import PropTypes from 'prop-types';
import './Button.css';

function SmallButton({ buttonValue, buttonLabel, buttonVariable }) {
	return (
		<button value={buttonValue} label={buttonLabel}>
			{buttonVariable}
		</button>
	);
}

SmallButton.propTypes = {
	buttonValue: PropTypes.any.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	buttonVariable: PropTypes.any.isRequired,
};

export default SmallButton;
