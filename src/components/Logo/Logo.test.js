import React from 'react';
import Logo from './index';
import { render, shallow } from 'enzyme';

describe('Logo', () => {
	test('should match the snapshot', () => {
		const component = render(<Logo />);
		expect(component).toMatchSnapshot();
	});

	test('should have a className of brand', () => {
		const component = shallow(<Logo />);
		expect(component.find('brand')).toBeTruthy();
	});
	test('should have a child with className of logo', () => {
		const component = shallow(<Logo />);
		expect(component.children().find('logo')).toBeTruthy();
	});
});
