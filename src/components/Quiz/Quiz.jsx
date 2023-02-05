import React from 'react'
import { useState } from 'react'
import './Quiz.css'
import { Link } from 'react-router-dom'
import MyButton from '../UI/MyButton/MyButton'

const questions = [
	{
		title: 'Что такое HTML?',
		variants: [
			'Язык разметки ',
			'Язык программирования',
			'Спроси что-то другое',
		],
		correct: 0,
	},
	{
		title: 'React - это ... ?',
		variants: ['библиотека', 'фреймворк', 'приложение'],
		correct: 0,
	},
	{
		title: 'Компонент - это ... ',
		variants: [
			'приложение',
			'часть приложения или страницы',
			'то, что я не знаю что такое',
		],
		correct: 1,
	},
	{
		title: 'Что такое JSX?',
		variants: [
			'Это простой HTML',
			'Это функция',
			'Это тот же HTML, но с возможностью выполнять JS-код',
		],
		correct: 2,
	},
]

const Quiz = () => {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]

	const onClickVariant = (index) => {
		console.log(step, index)
		setStep(step + 1)

		if (index === question.correct) {
			setCorrect(correct + 1)
		}
	}

	const Result = ({ correct }) => {
		return (
			<div className='result'>
				<img
					src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
					alt='resultImg'
				/>
				<h2>
					Вы отгадали {correct} ответа из {questions.length}
				</h2>
				<button>Попробовать снова</button>
			</div>
		)
	}

	const Game = ({ question, step, onClickVariant }) => {
		const persent = Math.round((step / questions.length) * 100)

		return (
			<>
				<div className='progress'>
					<div
						style={{ width: `${persent}%` }}
						className='progress__inner'
					></div>
				</div>
				<h1>{question.title}</h1>
				<ul>
					{question.variants.map((text, index) => (
						<li onClick={() => onClickVariant(index)} key={text}>
							{text}
						</li>
					))}
				</ul>
			</>
		)
	}
	return (
		<>
			<Link to='/'>
				<MyButton>Вернуться назад</MyButton>
			</Link>

			<div className='myQuiz section'>
				{step !== questions.length ? (
					<Game
						question={question}
						step={step}
						onClickVariant={onClickVariant}
					/>
				) : (
					<Result correct={correct} />
				)}
			</div>
		</>
	)
}

export default Quiz
