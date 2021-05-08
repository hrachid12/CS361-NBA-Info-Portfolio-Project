import { Link } from 'react-router-dom';

import styles from './Players.module.css';

const Players = () => {
	return (
		<div className={styles.main_div}>
			<h1>Players page</h1>

			<div>
				<div className={styles.active_player_msg}>
					<p>
						The list of players below are all of the current active players in the NBA. You 
                        can find a player manually, or use the search bar to filter the list of players. Clicking
                        on a player's name will direct you to a page with their statistics
					</p>
				</div>
			</div>

            <div>
                <input type="text"></input>
            </div>

			<div className={styles.players_div}>


				<ul className={styles.player_list}>
					<li className={styles.player_list}>
						<Link to="/players/1">Player 1</Link>
					</li>
					<li className={styles.player_list}>
						<Link to="/players/2">Player 2</Link>
					</li>
					<li className={styles.player_list}>
						<Link to="/players/3">Player 3</Link>
					</li>
					<li className={styles.player_list}>
						<Link to="/players/4">Player 4</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Players;
