import React, { useRef } from 'react';
import styled from 'styled-components';

const Accordion = ({ questItems, activeIndex, setActiveIndex }) => {
	const questionHandler = (index) => {
		setActiveIndex(index);
	};

	const answerToggle = (e) => {
		if (e.target.className === 'active') {
			e.target.className = ' ';
		}
	};

	const renderedQuestions = questItems.map((item, index) => {
		//this variable holds on a turnery that will give a value of the string 'active' if the index matches the state active index.
		const active = index === activeIndex ? 'active' : '';
		return (
			<React.Fragment key={index}>
				<QuestContainer onClick={() => questionHandler(index)}>
					<i className="fas fa-caret-right" />
					{item.question}
					<br />
					<p onClick={answerToggle} className={`${active}`}>
						{item.answer}
					</p>
				</QuestContainer>
			</React.Fragment>
		);
	});

	return <div>{renderedQuestions}</div>;
};

const QuestContainer = styled.div`
	font-size: 2.8rem;
	width: 60vw;
	margin: 0 auto;
	padding: .5rem 2rem;
	border: 2px solid rgba(0, 0, 0, 0.692);
	box-shadow: 0px 3px 7px 3px rgba(0, 0, 0, 0.49);
	background-color: #333;
	cursor: pointer;

	&:hover {
		opacity: .5;
	}

	.fa-caret-right {
		padding-right: 2rem;
	}

	p {
		font-size: 2.5rem;
		display: none;
		line-height: 35px;
		color: #dad6d6;
	}

	.active {
		display: inline;
	}
`;

export default Accordion;
