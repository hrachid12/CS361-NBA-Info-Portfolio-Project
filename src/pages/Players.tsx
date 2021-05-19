import React from 'react';
import PlayerList from '../components/Players/PlayerList';
import Card from '../components/UI/Card';

// import Player from '../models/Player';
import Team from '../models/Team';
import styles from './Players.module.css';

const Players: React.FC<{ teams: Team[] }> = (props) => {

	let players: string[] = [];
	props.teams.forEach( team => {
		team.players.forEach( player => {
			players.push(player);
		});
	});
	players.sort();

	return (
		<React.Fragment>
			<div className={styles.outer}>
				<div className={styles.active_player_msg}>
					<p>
						The list of players to the right are all of the current active players in the NBA. You can find a
						player manually, or use the search bar to filter the list of players. Clicking on a player's
						name will direct you to a page with their statistics
					</p>
				</div>

				<Card className={styles.inner_content}>
					<input type="text" />

					<PlayerList players={players} />
				</Card>
			</div>
		</React.Fragment>
	);
};

export default Players;
