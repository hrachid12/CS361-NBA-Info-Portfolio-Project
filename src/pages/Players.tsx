import React, { useState } from 'react';
import PlayerList from '../components/Players/PlayerList';
import Card from '../components/UI/Card';

import Team from '../models/Team';
import styles from './Players.module.css';

const Players: React.FC<{ teams: Team[] }> = (props) => {
	const [ searchFilter, setSearchFilter ] = useState('');

	let players: string[] = [];
	props.teams.forEach((team) => {
		team.players.forEach((player) => {
			players.push(player);
		});
	});
	players.sort();

	const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchFilter(event.target.value);
	}

	return (
		<React.Fragment>
			<div className={styles.outer}>
				<Card className={styles.inner_content}>
					<div className={styles.active_player_msg}>
						<p>
							The list of players to the right are all of the current active players in the NBA. You can
							find a player manually, or use the search bar to filter the list of players. Clicking on a
							player's name will direct you to a page with their statistics
						</p>
					</div>

					<form className={styles.search_filter}>
						<div>
							<label>Search</label>
							<input type="text" value={searchFilter} onChange={searchChangeHandler} />
						</div>
					</form>

					<PlayerList players={players.filter( el => el.toLowerCase().search(searchFilter.toLowerCase()) > -1 )} />
				</Card>
			</div>
		</React.Fragment>
	);
};

export default Players;
