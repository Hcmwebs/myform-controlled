import React, { useState } from 'react'
import styled from 'styled-components'

const FormInput = (props) => {
	const { label, errorMessage, handleChange, id, ...inputProps } = props

	const [focused, setFocused] = useState(false)

	const handleFocus = (e) => {
		setFocused(true)
	}
	return (
		<Wrapper>
			<div className='form-group'>
				<label htmlFor={inputProps.name}>{label}</label>
				<input
					{...inputProps}
					name={inputProps.name}
					onChange={handleChange}
					onBlur={handleFocus}
					onFocus={() => inputProps.name === 'message' && setFocused(true)}
					focused={focused.toString()}
				/>
				<span>error message</span>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.form-group {
		width: 300px;
		display: grid;

		label {
			font-size: 0.9rem;
			text-transform: capitalize;
			color: grey;
			margin-bottom: 0.25rem;
			margin-left: 0.75rem;
		}
		input {
			font-size: 1rem;
			padding: 0.75rem;
			margin-bottom: 0.25rem;
			border-radius: 0.3rem;
			border: 1px solid grey;

			&::placeholder {
				font-size: 0.9rem;
			}

			&[name='message'] {
				min-height: 20px;
				max-width: 300px;
			}
			&:invalid[focused='true'] {
				border: 1px solid red;
			}
			&:invalid[focused='true'] ~ span {
				display: block;
			}
		}

		span {
			color: red;
			padding: 0.125rem;
			margin-bottom: 0.5rem;
			margin-left: 0.75rem;
			font-size: 0.9rem;
			display: none;
		}
	}
`
export default FormInput
