import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../UI/MyButton/MyButton';
import './Counter.css';
const Counter = () => {
	const [count, setCount] = useState(0)
	const onClickPlus = () => {
		setCount(count + 1)
	}
	const onClickMinus = () => {
		setCount(count - 1)
	}
	return (
		<>
			<Link to='/'>
				<MyButton>Вернуться назад</MyButton>
			</Link>
			<div className='myCounter section'>
				<h3 className='title'>Нажми меня:</h3>
				<h1 className='subtitle'>{count}</h1>
				<button onClick={onClickMinus} className='minus button'>- Минус</button>
				<button onClick={onClickPlus} className='plus button'>Плюс +</button>
			</div>
		</>
	)
}

export default Counter