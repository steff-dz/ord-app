import OsloPng from '../images/oslo.png';
import ATeam1 from '../images/ATeam.jpg';
import { NavLink } from 'react-router-dom';
import { HomeContainer, About, Section, YesButton } from '../HomeStyle';

const Home = () => {
	return (
		<HomeContainer>
			<header>
				<img id="OrdHomeLogo" src={OsloPng} alt="Logo of Oslo Roller Derby." />
				<h1 id="titleContainer">
					<div>Oslo</div>
					<div>Roller</div>
					<div>Derby</div>
				</h1>
			</header>
			<i className="fas fa-arrow-down" />
			<About>
				<img src={ATeam1} alt="A Team after a game" />
				<h2>Who We Are</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quibusdam nostrum nobis cumque!
					Praesentium dolorem quia distinctio consectetur iste sunt, eligendi accusamus? Aut illo veritatis
					nesciunt eos ratione maiores consectetur. Totam mollitia dicta fugit iusto nihil, quasi soluta
					officiis est natus doloribus voluptatibus id consectetur impedit. Et aliquid eius beatae nostrum
					velit blanditiis a nobis tenetur hic! Nam, eveniet. Assumenda. Incidunt amet repellat autem
					perspiciatis id. Magni voluptas nesciunt, quis, voluptates optio dicta, et cupiditate labore
					consequatur fugit consectetur voluptate! Ducimus sint autem tenetur quidem impedit accusantium
					aliquid consectetur id.
				</p>
				<i className="fas fa-arrow-down" />
			</About>
			<Section>
				<h3>Hey, new skater?</h3>
				<h3>Looking for a number?</h3>
				<NavLink to="/numberpage">
					<YesButton>Yes</YesButton>
				</NavLink>
			</Section>
		</HomeContainer>
	);
};

export default Home;
