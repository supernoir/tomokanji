import React from 'react';
import { StyledNavigation } from './style';
import Renderer from 'react-test-renderer'

describe('Navigation', () => {
	test('should match the snapshot', () => {
		const component = Renderer.create(<StyledNavigation />);
		expect(component).toMatchSnapshot();
	});
});
