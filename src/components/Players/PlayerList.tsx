import { useContext } from 'react';
import PlayerListItem from './PlayerListItem';

import styles from './PlayerList.module.css';
import { ThemeContext } from '../../store/theme-context';

const PlayerList: React.FC<{ players: string[] }> = (props) => {
	const themeCxt = useContext(ThemeContext);

	return (
		<div className={styles.players_div}>
			<table className={themeCxt.selectTheme(`${styles.player_list}`, `${styles.player_list_dark}`)}>
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
