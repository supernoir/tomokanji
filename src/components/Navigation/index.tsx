import React from 'react';
import { StyledButton, StyledRandomButton } from '../Button/style';
import { StyledNavigation } from './style';

interface NavigationProps {
	handlePrevious: () => void;
	handleRandom: () => void;
	handleNext: () => void;
	children?: JSX.Element;
}

const Navigation: React.FC<NavigationProps> = (props) => {
	return (
		<StyledNavigation>
			<StyledButton label={'‹ 前 Previous'} handleClick={props.handlePrevious} />
			<StyledRandomButton label={'Random 運'} handleClick={props.handleRandom} />
			<StyledButton label={'Next 次 ›'} handleClick={props.handleNext} />
		</StyledNavigation>
	);
};

export default Navigation