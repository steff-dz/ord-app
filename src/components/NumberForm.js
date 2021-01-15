import React from 'react';
import styled from 'styled-components';
import { allSkaters } from '../Playerdata';

const NumberForm = ({ setPage, inputNum, setInputNum, setSkater }) => {
	const inputHandler = (e) => setInputNum(e.target.value);

	const numCheckHandler = (e) => {
		e.preventDefault();
		if (inputNum === '1') {
			setPage({ message: `#${inputNum} is not available!` });
			return;
		}

		let existingSkaters = allSkaters.filter((skater) => skater.number === inputNum);
		setInputNum('');

		if (existingSkaters.length === 0) {
			setPage({ message: `#${inputNum} is available!` });
			setSkater('');
		}

		if (existingSkaters.length > 0) {
			for (let i = 0; i < existingSkaters.length; i++) {
				if (existingSkaters[i].active === true) {
					setPage({ message: `#${inputNum} is taken!` });
					setSkater(existingSkaters[i]);
					return;
				} else if (existingSkaters[i].active === false && existingSkaters[i].numReserve === true) {
					setPage({ message: `#${inputNum} is a Hall of Fame or Reserved Number!` });
					setSkater(existingSkaters[i]);
				} else {
					setPage({ message: `#${inputNum} is available!` });
					setSkater('');
				}
			}
		}
	};

	return (
		<Form>
			<input value={inputNum} onChange={inputHandler} type="number" placeholder="# type a number here" />
			<SubmitBtn onClick={numCheckHandler} type="submit">
				CHECK
			</SubmitBtn>
		</Form>
	);
};

const Form = styled.form`
	display: flex;

	input {
		padding: 1rem;
		width: 20vw;
		font-size: 2rem;
	}
	@media only screen and (max-width: 1000px) {
		input {
			width: 45vw;
			font-size: 1.8rem;
		}
	}
`;

//Make this re-usable?
const SubmitBtn = styled.button`
	height: 100%;
	padding: 1rem;
	font-weight: bold;
	font-size: 2rem;
	background-color: rgb(241, 161, 11);
`;

export default NumberForm;
