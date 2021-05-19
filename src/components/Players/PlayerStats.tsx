import Player from '../../models/Player';

import styles from './PlayerStats.module.css';

const PlayerStats: React.FC<{ player: Player }> = (props) => {
	return (
		<table className={styles.stats_table}>
			<tbody>
				{props.player.stats.map((item) => {
					return (
						<tr key={Math.random()}>
							{item.map((el) => {
								return <td key={Math.random()}>{el}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default PlayerStats;
