import './Button.css';
import PropTypes from 'prop-types';

function Button({text = ''}) {
    return(
        <button className={'button'}>{ 'Confirm' }</button>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;