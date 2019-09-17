import React from 'react';
import { StyledHighlight, StyledLogo } from './style';

export const Brand = () => {
	return (
		<div>
			<StyledLogo />
		</div>
	);
};

export const Logo = () => {
	return (
		<p>
			<span>友</span><StyledHighlight />
		</p>
	);
};

export const Highlight = () => {
	return <span>カンジ</span>;
};
