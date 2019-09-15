import React from 'react';
import { render, shallow } from 'enzyme';
import { StyledBrand, StyledLogo, StyledHighlight } from './style';

describe('Brand', () => {
	test('should match the snapshot', () => {
		const component = render(<StyledBrand />);
		expect(component).toMatchSnapshot();
	});
});

describe('Logo', () => {
	test('should match the snapshot', () => {
		const component = render(<StyledLogo />);
		expect(component).toMatchSnapshot();
	});
});

describe('Highlight', () => {
	test('should match the snapshot', () => {
		const component = render(<StyledHighlight />);
		expect(component).toMatchSnapshot();
	});
});
