import React from 'react';

interface ButtonProps {
	handleClick: () => void;
	label: string;
	className?: string;
}

const Button: React.FC<ButtonProps> = props => {
	return (
		<a onClick={props.handleClick} className={props.className}>
			{props.label}
		</a>
	);
};

export default Button