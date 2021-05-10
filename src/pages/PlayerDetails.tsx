import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import Card from '../components/UI/Card';
import PlayerImage from '../components/Players/PlayerImage';
import Player from '../models/Player';

import styles from './PlayerDetails.module.css';

interface RouteParams {
	player_id: string;
}

const PlayerDetails: React.FC = (props) => {
	const params = useParams<RouteParams>();
	let data = useLocation().state as Player;

	console.log(params['player_id']);
	console.log(data.image);
	return (
		<React.Fragment>
			<h1>Player Details</h1>

			<div className={styles.outer}>
				<div className={styles.image_div}>
					<PlayerImage image={data.image} alt="Image of player" />
				</div>

				<Card className={styles.content}>
					<p>Player {params['player_id']}</p>
					<div className={styles.stats_div}>
						<p>Placeholder for player stats</p>
					</div>
				</Card>
			</div>
		</React.Fragment>
	);
};

export default PlayerDetails;
