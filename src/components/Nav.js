import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
	return (
		<StyledNav>
			<ul id="navList">
				<NavLink className="navItem" to="/">
					<li>Home</li>
				</NavLink>
				<NavLink className="navItem" to="/numberpage">
					<li>Number Registration</li>
				</NavLink>
				<NavLink className="navItem" to="/vault">
					<li>League Vault</li>
				</NavLink>
				<NavLink className="navItem" to="/quiz">
					<li>Quiz</li>
				</NavLink>
				<NavLink className="navItem" to="/faq">
					<li>FAQ</li>
				</NavLink>
			</ul>
		</StyledNav>
	);
};

//styling below-------------------------------------------------
const StyledNav = styled.nav`
	background-color: #333;
	height: 10vh;
	font-size: 2rem;

	ul {
		list-style: none;
		display: flex;
		height: 90%;
		align-items: flex-end;
		justify-content: space-evenly;
	}

	.navItem {
		text-decoration: none;
		color: white;
	}
`;

export default Nav;
