import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../UI/MyButton/MyButton';
import './MainPage.css';
const MainPage = () => {
	return (
		<div className="navbar">
			<Link to="/counter">
				<MyButton>Счестчик</MyButton>
			</Link>
			<Link to="/modal">
				<MyButton>Модальное окно</MyButton>
			</Link>
			<Link to="/quiz">
				<MyButton>Опросник</MyButton>
			</Link>
			<Link to="/userlist">
				<MyButton>Список пользователей</MyButton>
			</Link>
			<Link to="/converter">
				<MyButton>Конвертер валют</MyButton>
			</Link>
			<Link to="/photocollection">
				<MyButton>Колекция фотографий</MyButton>
			</Link>
		</div>
	)
}

export default MainPage