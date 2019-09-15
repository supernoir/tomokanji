import React from 'react';
import { StyledButton, StyledRandomButton } from './style';
import { render, shallow } from 'enzyme';

describe('Button', () => {
	//const testClickHandler = jest.fn();
	test('should match the snapshot', () => {
		const component = render(<StyledButton label={'example'} />);
		expect(component).toMatchSnapshot();
	});
});

describe('RandomButton', () => {
	//const testClickHandler = jest.fn();
	test('should match the snapshot', () => {
		const component = render(<StyledRandomButton label={'example'} />);
		expect(component).toMatchSnapshot();
	});
});
