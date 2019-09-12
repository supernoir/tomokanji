import React from 'react';
import Navigation from './index';
import { render, shallow } from 'enzyme';

describe('Navigation', () => {
	const testClickHandler = jest.fn();
	test('should match the snapshot', () => {
		const component = render(<Navigation handlePrevious={testClickHandler} handleNext={testClickHandler} handleRandom={testClickHandler} />);
		expect(component).toMatchSnapshot();
	});
});
