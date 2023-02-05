import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Success from '../Users/Success'
import UserMain from '../Users/UserMain'
import './UsersForm.css'
// Тут список пользователей: https://reqres.in/api/users

const UsersForm = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then((res) => res.json())
			.then((json) => {
				setUsers(json.data)
			})
			.catch((err) => {
				console.warn(err)
				alert('Ошибка при получении пользователей')
			})
	}, [])
	return (
		<div className='userForm'>
			<UserMain />
			<Success />
		</div>
	)
}

export default UsersForm
