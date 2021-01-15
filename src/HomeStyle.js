import styled from 'styled-components';

export const HomeContainer = styled.div`
	min-height: 100vh;
	margin: 0 10px;
	@media only screen and (max-width: 1400px) {
		margin-top: 10px;
	}

	header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0 4%;
		position: relative;
		@media only screen and (max-width: 1400px) {
			margin: 0;
			width: 100%;
			height: fit-content;
			justify-content: center;
		}
		@media only screen and (max-width: 1000px) {
			flex-direction: column;
			align-content: center;
		}
	}

	#titleContainer {
		font-size: 17rem;
		@media only screen and (max-width: 1400px) {
			font-size: 12rem;
		}
	}

	#titleContainer div {
		padding-bottom: 0;
		text-align: center;
		display: block;
		line-height: 180px;
		@media only screen and (max-width: 1400px) {
			line-height: 120px;
		}
		@media only screen and (max-width: 1000px) {
			line-height: 100px;
		}
	}

	#titleContainer div:nth-child(2) {
		margin-left: 70px;
		font-size: 20rem;
		letter-spacing: 15px;
		@media only screen and (max-width: 1400px) {
			font-size: 15rem;
			margin-left: 50px;
		}
		@media only screen and (max-width: 1000px) {
			font-size: 11rem;
			margin-left: 0;
			letter-spacing: 0px;
		}
	}

	#titleContainer div:nth-child(3) {
		margin-left: 150px;
		font-size: 17rem;
		@media only screen and (max-width: 1400px) {
			font-size: 12rem;
			margin-left: 120px;
		}
		@media only screen and (max-width: 1400px) {
			font-size: 11rem;
			margin-left: 0;
		}
	}

	//should make this into an exportable variable, maybe?
	#OrdHomeLogo {
		height: 70vh;
		width: 70vh;
		position: absolute;
		right: 5%;
		top: 5%;
		@media only screen and (max-width: 1400px) {
			position: relative;
			height: 60vh;
			width: 60vh;
			right: 0;
			top: 0;
		}
	}

	.fa-arrow-down {
		margin-top: 2%;
		width: 100%;
		text-align: center;
		font-size: 5rem;
		animation: bounce;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		opacity: 0.6;
		@media only screen and (max-width: 1400px) {
			display: none;
		}
	}
`;

export const About = styled.article`
	margin-top: 2%;
	min-height: 20vh;
	display: flex;
	flex-direction: column;

	//Could make this and the h3 their own components to re-use throughout the home page.
	h2 {
		text-align: center;
		font-size: 7rem;
		@media only screen and (max-width: 900px) {
		}
	}

	img {
		width: 60%;
		margin: 30px auto;
		@media only screen and (max-width: 1000px) {
			width: 90%;
			margin-top: 10px;
		}
	}

	p {
		padding: 2rem 18rem;
		font-size: 3rem;
		line-height: 5rem;
		margin-bottom: 3%;
		@media only screen and (max-width: 900px) {
			padding: 1rem 5rem;
		}

		@media only screen and (max-width: 600px) {
			padding: 1rem .5rem;
			line-height: 3.5rem;
			text-align: center;
		}
	}
`;

export const Section = styled.section`
	margin: 3% auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	width: 70vw;

	h3 {
		font-size: 6rem;
		align-self: flex-start;
		line-height: 9rem;
	}

	h3:nth-child(2) {
		padding-bottom: 25px;
	}

	@media only screen and (max-width: 700px) {
		h3 {
			line-height: 6rem;
		}

		h3:nth-child(2) {
			font-size: 4rem;
		}
	}
`;

export const YesButton = styled.button`
	font-size: 3.5rem;
	width: 12vw;
	height: 8vh;
	border-radius: 50px;

	&:hover {
		opacity: .5;
		cursor: pointer;
	}

	@media only screen and (max-width: 700px) {
		width: 30vw;
	}
`;
