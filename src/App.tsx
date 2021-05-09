import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Players from './pages/Players';
import MainHeader from './components/UI/MainHeader';
import PlayerDetails from './pages/PlayerDetails';

function App() {
	return (
		<div className="App">
			<MainHeader />

			<main>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/home" />
					</Route>

					<Route path="/home">
						<Home />
					</Route>

					<Route path="/players" exact>
						<Players />
					</Route>

					<Route path="/players/:player_id" exact>
						<PlayerDetails />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
