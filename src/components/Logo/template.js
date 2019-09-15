import React from 'react';
import { StyledHighlight, StyledLogo } from './style';

export const Brand = ({ className }) => {
	return (
		<div className={className}>
			<StyledLogo />
		</div>
	);
};

export const Logo = ({ className }) => {
	return (
		<p className={className}>
			<span>友</span><StyledHighlight />
		</p>
	);
};

export const Highlight = ({ className }) => {
	return <span className={className}>カンジ</span>;
};
