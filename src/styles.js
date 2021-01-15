import styled from 'styled-components';

export const PageHeader = styled.h1`
	font-size: 4.5rem;
	margin-top: 2rem;

	@media only screen and (max-width: 750px) {
		margin: 2rem 5%;
	}
`;

export const PageContainer = styled.main`
	padding-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	height: 100vh;
`;
