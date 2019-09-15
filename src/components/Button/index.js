import React from 'react';

export const Button = props => {
	return (
		<a onClick={props.handleClick} className={props.className}>
			{props.label}
		</a>
	);
};
