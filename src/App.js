import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import Home from './pages/Home';
import NumberPage from './pages/NumberApp';
import LeagueVault from './pages/LeagueVault';
import Quiz from './pages/Quiz';
import FAQ from './pages/FAQ';

function App() {
	return (
		<Router>
			<div className="App">
				<GlobalStyle />
				<Nav />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/numberpage">
						<NumberPage />
					</Route>
					<Route exact path="/vault">
						<LeagueVault />
					</Route>
					<Route exact path="/quiz">
						<Quiz />
					</Route>
					<Route exact path="/faq">
						<FAQ />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
