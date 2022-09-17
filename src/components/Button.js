import React from 'react'
import styled from 'styled-components'

const Button = () => {
	return <Wrapper>send</Wrapper>
}
const Wrapper = styled.button`
	width: 100%;
	color: #fff;
	background-color: darkgreen;
	padding: 0.75rem 1.5rem;
	font-size: 1.2rem;
	letter-spacing: 1.3px;
	text-transform: capitalize;
	border: none;
	border-radius: 0.3125rem;
	cursor: pointer;
	transition: all 0.5s ease-in-out;

	&:hover {
		opacity: 0.8;
		transform: scale(0.95);
	}
`

export default Button
