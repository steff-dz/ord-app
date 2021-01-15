import React from 'react';
import styled from 'styled-components';
import { PageHeader, PageContainer } from '../styles';
import { quizQuestions } from './QuizQuestions';

const Quiz = () => {
	const counter = 1 + '.' + ' ';
	console.log(quizQuestions[0]);
	const choices = quizQuestions[0].choices;
	console.log(choices);
	const values = Object.values(choices);
	console.log(values);
	const renderedChoices = values.map((el) => {
		return <li>{el}</li>;
	});

	return (
		<PageContainer>
			<PageHeader>A Roller Derby Rules Quiz.</PageHeader>
			<QuestionContainer>
				<h4>
					{counter}
					{quizQuestions[0].question}
				</h4>
				<ul>{renderedChoices}</ul>
			</QuestionContainer>
		</PageContainer>
	);
};

const QuestionContainer = styled.article`
	margin: 2rem 0rem;
	width: 60vw;
	font-size: 3rem;
	line-height: 4rem;
`;

export default Quiz;
