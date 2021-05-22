import { useState, useEffect, } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import MainHeader from './components/UI/MainHeader';
import Players from './pages/Players';
import PlayerDetails from './pages/PlayerDetails';
import Teams from './pages/Teams';
import TeamDetails from './pages/TeamDetails';

import Team from './models/Team';
import GenerateTeam from './requests/GenerateTeam';

import LanguageContextProvider from './store/language-context';
import PlayerContextProvider from './store/player-context';

import { NBA_TEAMS } from './CONSTANTS';

function App() {
	const [ teams, setTeams ] = useState<Team[]>([]);

	useEffect(() => {
		NBA_TEAMS.forEach(async (team_name) => {
			GenerateTeam(team_name).then((new_team) => {
				setTeams((prevState) => {
					return [ ...prevState, new_team ];
				});
			});
		});
	}, []);

	return (
		<PlayerContextProvider>
			<LanguageContextProvider>
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

							<Route path="/players/:player_name" exact>
								<PlayerDetails />
							</Route>
						</Switch>
					</main>
			</LanguageContextProvider>
		</PlayerContextProvider>
	);
}

export default App;
