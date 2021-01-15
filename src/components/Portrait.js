import React, { useRef } from 'react';
import styled from 'styled-components';

const Portrait = ({ number, icon, name }) => {
	const ref = useRef();

	const clickTest = (name, number) => {
		if (ref.current.innerText === name) {
			ref.current.innerText = '#' + number;
		} else {
			ref.current.innerText = name;
		}
	};

	return (
		<PortraitIcon onClick={() => clickTest(name, number)}>
			<h3 ref={ref}>#{number}</h3>
			<img src={icon} />
		</PortraitIcon>
	);
};

const PortraitIcon = styled.div`
	height: 200px;
	width: 150px;
	color: white;
	font-size: 2rem;
	text-align: center;
	border: 1px solid black;
	overflow: hidden;
	background-color: #353535;
	position: relative;
	cursor: pointer;

	img {
		height: 200px;
		object-fit: center;
	}
`;

const NameBox = styled.span`
	width: 100%;
	height: 50px;
	background-color: green;
	position: absolute;
	left: 0;
	z-index: 10;
	display: none;
`;

export default Portrait;
