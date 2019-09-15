import React from 'react';
import { render, shallow } from 'enzyme';
import { StyledNavigation } from './style';

describe('Navigation', () => {
	const testClickHandler = jest.fn();
	test('should match the snapshot', () => {
		const component = render(<StyledNavigation handlePrevious={testClickHandler} handleNext={testClickHandler} handleRandom={testClickHandler} />);
		expect(component).toMatchSnapshot();
	});
});
