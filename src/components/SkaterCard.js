import React from 'react';
import styled from 'styled-components';

const SkaterCard = ({ skater }) => {
	if (!skater) return null;

	return (
		<CardContainer>
			<ImageContainer style={{ backgroundImage: `url(${skater.image})` }} />
			<SkaterInfo key={skater.name}>
				<ul>
					<li>
						Skater Name: <br />
						<span>{skater.name}</span>
					</li>
					<li>
						Position(s): <br />
						<span>{skater.position}</span>
					</li>
					<li>
						Team(s):<br />
						<span> {skater.team}</span>
					</li>
				</ul>
			</SkaterInfo>
		</CardContainer>
	);
};

const CardContainer = styled.article`
	border: 2px solid rgba(0, 0, 0, 0.692);
	box-shadow: 0px 3px 7px 3px rgba(0, 0, 0, 0.49);
	height: fit-content;
	width: 50%;
	display: flex;
	justify-content: space-between;
	gap: 20px;
	background-color: #333;
	margin-top: 1.5rem;
	@media only screen and (max-width: 1200px) {
		flex-direction: column;
		width: 70%;
	}
`;
const ImageContainer = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 400px;
	width: 50%;
	border-right: 2px solid black;
	@media only screen and (max-width: 1200px) {
		height: 500px;
		background-size: cover;
	}
`;

const SkaterInfo = styled.div`
	width: 50%;
	ul {
		font-size: 1.8rem;
		margin-left: 10px;
		list-style: none;
		color: #cecdcd;
	}

	li {
		padding: 1rem;
		line-height: 30px;
	}

	span {
		font-size: 2.5rem;
		color: white;
	}
`;

export default SkaterCard;
