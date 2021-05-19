import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Players from './pages/Players';
import Teams from './pages/Teams';
import MainHeader from './components/UI/MainHeader';
import PlayerDetails from './pages/PlayerDetails';
import TeamDetails from './pages/TeamDetails';

import GenerateTeams from './requests/GenerateTeams';
import Team from './models/Team';

function App() {
	const [teams, setTeams] = useState<Team[]>([]);
	
	// const [changeTeams, setChangeTeams] = useState(true);


	// const GenerateTeamsHandler = useCallback(async () => {
	// 	GenerateTeams().then((gen_teams) => {
	// 		setTeams(gen_teams);
	// 		setIsLoading(false);
	// 		console.log(gen_teams);
	// 	});
	// }, []);

	useEffect(() => {
		GenerateTeams().then((gen_teams) => {
			setTeams(gen_teams);
			console.log(gen_teams);
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
