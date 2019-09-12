import React from 'react';

const Button = props => {
	return (
		<a onClick={props.handleClick} className={props.className}>
			{props.label}
		</a>
	);
};
export default Button;
