import React, { Suspense, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainHeader from './components/UI/MainHeader';
import LoadingSpinner from './components/UI/LoadingSpinner';

import Teams from './pages/Teams';

import Team from './models/Team';
import GenerateTeam from './requests/GenerateTeam';

import LanguageContextProvider from './store/language-context';
import PlayerContextProvider from './store/player-context';

import { NBA_TEAMS } from './CONSTANTS';

const Players = React.lazy(() => import('./pages/Players'));
const PlayerDetails = React.lazy(() => import('./pages/PlayerDetails'));
const TeamDetails = React.lazy(() => import('./pages/TeamDetails'));
const Home = React.lazy(() => import('./pages/Home'));

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
					<Suspense fallback={
						<div className='centered'>
							<LoadingSpinner />
						</div>
					}>
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
					</Suspense>
				</main>
			</LanguageContextProvider>
		</PlayerContextProvider>
	);
}

export default App;
