import React from 'react';
import { StyledButton, StyledRandomButton } from '../Button/style';

export const Navigation = props => {
	return (
		<aside>
			<StyledButton label={'‹ 前 Previous'} handleClick={props.handlePrevious} />
			<StyledRandomButton label={'Random 運'} handleClick={props.handleRandom} />
			<StyledButton label={'Next 次 ›'} handleClick={props.handleNext} />
		</aside>
	);
};
