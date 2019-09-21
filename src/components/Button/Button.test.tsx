import React from 'react';
import { StyledButton, StyledRandomButton } from './style';
import Renderer from 'react-test-renderer';

describe('Button', () => {
	const testClickHandler = jest.fn();
	test('should match the snapshot', () => {
		const component = Renderer.create(<StyledButton label={'example'} handleClick={testClickHandler} />);
		expect(component).toMatchSnapshot();
	});
});

describe('RandomButton', () => {
	const testClickHandler = jest.fn();
	test('should match the snapshot', () => {
		const component = Renderer.create(<StyledRandomButton label={'example'} handleClick={testClickHandler} />);
		expect(component).toMatchSnapshot();
	});
});