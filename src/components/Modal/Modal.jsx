import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../UI/MyButton/MyButton';
import './Modal.css';

const Modal = ({open, setOpen, children}) => {
	// const [open, setOpen] = useState(false);
	return (
		<>
			<Link to='/'>
				<MyButton>Вернуться назад</MyButton>
			</Link>
			<div className='myModal section'>
				<button onClick={() => setOpen(true)} className='open-modal-btn'>Открыть окно</button>
					<div className={`overlay animated ${open ? 'show' : ''}`}>
						<div className="modal">
							<svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
								<title />
								<path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
							</svg>
							<img src="https://www.purinaone.ru/cat/sites/default/files/styles/image_576/public/2020-06/shotlandskaya-vislouhaya-koshka.jpg?itok=VB58yEHI" alt='img' />
							{children}
						</div>
					</div>
			</div>
		</>
	)
}

export default Modal