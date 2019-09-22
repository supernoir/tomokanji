import React from 'react';
import { StyledHeader, StyledBrand, StyledLogo } from './style';
import TomoSVG from './tomo';

export const Header = () => {
	return (<StyledHeader>
		<StyledBrand>
			トモ
		</StyledBrand>
		<StyledLogo>
			<TomoSVG />
		</StyledLogo>
		<StyledBrand>
			カンジ
		</StyledBrand>
	</StyledHeader>)
}