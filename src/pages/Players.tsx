import React from 'react';
import PlayerListItem from '../components/Players/PlayerListItem';
import Card from '../components/UI/Card';

import Player from '../models/Player';
import styles from './Players.module.css';

const Players = () => {
	const PLACEHOLDER_PLAYERS = [
		new Player('https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg'),
		new Player('https://upload.wikimedia.org/wikipedia/commons/1/17/Julius_Randle_with_Lakers.jpg'),
		new Player('https://upload.wikimedia.org/wikipedia/commons/e/e9/RJ_Barrett_Knicks_%28cropped%29.jpg'),
		new Player(
			'https://upload.wikimedia.org/wikipedia/commons/e/eb/Brian_Scalabrine_of_the_Boston_Celtics_at_NBA_Media_Day_2007.png'
		)
	];

	return (
		<React.Fragment>
			<h1>Players page</h1>

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

					<div className={styles.players_div}>
						<ul className={styles.player_list}>
							{PLACEHOLDER_PLAYERS.map((player) => <PlayerListItem key={player.id} player={player} />)}
						</ul>
					</div>
				</Card>
			</div>
		</React.Fragment>
	);
};

export default Players;
