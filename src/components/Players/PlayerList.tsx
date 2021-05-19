import PlayerListItem from './PlayerListItem';
// import Player from '../../models/Player';

import styles from './PlayerList.module.css';

const PlayerList: React.FC<{ players: string[] }> = (props) => {
	return (
		<div className={styles.players_div}>
			<ul className={styles.player_list}>
				{props.players.map((player) => <PlayerListItem key={player} player={player} />)}
			</ul>
		</div>
	);
};

export default PlayerList;
