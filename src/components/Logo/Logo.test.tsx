import React from 'react';
import { StyledBrand, StyledLogo, StyledHighlight } from './style';
import Renderer from 'react-test-renderer'

describe('Brand', () => {
	test('should match the snapshot', () => {
		const component = Renderer.create(<StyledBrand />);
		expect(component).toMatchSnapshot();
	});
});

describe('Logo', () => {
	test('should match the snapshot', () => {
		const component = Renderer.create(<StyledLogo />);
		expect(component).toMatchSnapshot();
	});
});

describe('Highlight', () => {
	test('should match the snapshot', () => {
		const component = Renderer.create(<StyledHighlight />);
		expect(component).toMatchSnapshot();
	});
});
