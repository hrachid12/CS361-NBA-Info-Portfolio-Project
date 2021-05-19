import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Players from './pages/Players';
import Teams from './pages/Teams';
import MainHeader from './components/UI/MainHeader';
import PlayerDetails from './pages/PlayerDetails';
import TeamDetails from './pages/TeamDetails';

import GenerateTeam from './requests/GenerateTeam';
import Team from './models/Team';

const nba_teams = ['New York Knicks', 'Boston Celtics', 'New Orleans Pelicans', 'Utah Jazz', 'Miami Heat'];

function App() {
	const [teams, setTeams] = useState<Team[]>([]);

	useEffect(() => {	
		nba_teams.forEach( async (team_name) => {
			GenerateTeam(team_name).then((new_team) => {
				setTeams((prevState) => {
					return [...prevState, new_team];
				});
			});
	
			console.log('generating...');
		});
	
	}, []);

	return (
		<div className="App">
			<MainHeader />

			<main>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>

					<Route path="/teams" exact>
						<Teams teams={teams} />
					</Route>

					<Route path="/teams/:team_name" exact>
						<TeamDetails />
					</Route>

					<Route path="/players" exact>
						<Players teams={teams} />
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
