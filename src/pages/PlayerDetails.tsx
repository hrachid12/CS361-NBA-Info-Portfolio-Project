import { useParams } from 'react-router-dom';

import styles from './PlayerDetails.module.css';

interface RouteParams {
	player_id: string;
};

const PlayerDetails: React.FC = () => {
	const params = useParams<RouteParams>();

	console.log(params['player_id']);
	return (
		<div>
			<h1>Player Details</h1>
			<p>Player {params['player_id']}</p>

			<div className={styles.stats_div}>
				<p>Placeholder for player stats</p>
			</div>
		</div>
	);
};

export default PlayerDetails;
