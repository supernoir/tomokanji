import React from 'react';
import Button from './index';
import { render, shallow } from 'enzyme';

describe('Button', () => {
	//const testClickHandler = jest.fn();
	test('should match the snapshot', () => {
		const component = render(<Button label={'example'} />);
		expect(component).toMatchSnapshot();
	});

	test('should have a label', () => {
		const component = shallow(<Button label={'example'} />);
		expect(component.text('example')).toMatch('example');
	});
});
