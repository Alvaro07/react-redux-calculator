import React from 'react';

/**
 * Button component
 */

const Button = (props) => {
	return 	<button className={`calculator__btn ${props.extraClass}`} onClick={props.onClick}>{props.children}</button>
}

Button.defaultProps = {
	extraClass: ''
};

export default Button;