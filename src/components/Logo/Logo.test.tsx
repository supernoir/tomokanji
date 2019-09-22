import React from 'react';
import { StyledBrand } from './style';
import Renderer from 'react-test-renderer'

describe('Brand', () => {
	test('should match the snapshot', () => {
		const component = Renderer.create(<StyledBrand />);
		expect(component).toMatchSnapshot();
	});
});
