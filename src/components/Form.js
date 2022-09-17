import styled from 'styled-components'

import React, { useState } from 'react'
import FormInput from './FormInput'
import Button from './Button'

const Form = () => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		message: '',
	})

	const inputs = [
		{
			id: 1,
			name: 'username',
			type: 'text',
			placeholder: 'Username',
			errorMessage:
				'Username should be 3-16 characters and should not include any special characters!',
			label: 'Username',
			pattern: '^[A-Za-z0-9]{3,16}$',
			required: true,
		},
		{
			id: 2,
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			errorMessage: 'It should be a valid email address!',
			label: 'Email',
			required: true,
		},

		{
			id: 3,
			name: 'message',
			type: 'text',
			placeholder: 'Message',
			errorMessage: 'It should not be empty',
			label: 'Message',
			required: true,
		},
	]

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(values)
	}

	return (
		<Wrapper>
			<form className='form' onSubmit={handleSubmit}>
				<h1>Contact us</h1>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						handleChange={handleChange}
					/>
				))}
				<Button type='submit' />
			</form>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	margin: 0 auto;
	.form {
		width: 300px;
		padding: 1.5rem 3rem;
		background-color: #fff;
		display: grid;
		place-items: center;
		gap: 0.5rem;
		box-shadow: 0 3px 25px 3px rgba(0, 0, 0, 0.1);
	}
`

export default Form
