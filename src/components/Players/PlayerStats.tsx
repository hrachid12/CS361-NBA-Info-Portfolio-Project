import { useContext } from 'react';
import Player from '../../models/Player';
import { ThemeContext } from '../../store/theme-context';

import styles from './PlayerStats.module.css';

const PlayerStats: React.FC<{ player: Player }> = (props) => {
	const themeCxt = useContext(ThemeContext);

	return (
		<table className={themeCxt.selectTheme(`${styles.stats_table}`, `${styles.stats_table_dark}`)}>
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
