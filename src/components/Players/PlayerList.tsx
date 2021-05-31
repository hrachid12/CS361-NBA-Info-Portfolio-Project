import PlayerListItem from './PlayerListItem';

import styles from './PlayerList.module.css';

const PlayerList: React.FC<{ players: string[] }> = (props) => {
	return (
		<div className={styles.players_div}>
			<table className={styles.player_list}>
				<tbody>
					<tr>
						<td>Players</td>
					</tr>
					{props.players.map((player) => <PlayerListItem key={player} player={player} />)}
				</tbody>
			</table>
		</div>
	);
};

export default PlayerList;
