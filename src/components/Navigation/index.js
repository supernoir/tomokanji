import React from 'react';
import Button from '../Button';

const Navigation = props => {
	return (
		<aside className="nav">
			<Button label={'‹ 前 Previous'} handleClick={props.handlePrevious} className={'button'} />
			<Button label={'Random 運'} handleClick={props.handleRandom} className={'button random'} />
			<Button label={'Next 次 ›'} handleClick={props.handleNext} className={'button'} />
		</aside>
	);
};

export default Navigation;
