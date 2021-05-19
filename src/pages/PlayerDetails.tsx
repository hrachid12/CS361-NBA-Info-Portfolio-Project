import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../components/UI/Card';
import PlayerImage from '../components/Players/PlayerImage';
import Player from '../models/Player';
import GeneratePlayer from '../requests/GeneratePlayer';

import styles from './PlayerDetails.module.css';

interface RouteParams {
	player_name: string;
}

const PlayerDetails: React.FC = (props) => {
	const params = useParams<RouteParams>();
	const [ player, setPlayer ] = useState<Player>(new Player('', '', [ [ '' ] ], ''));

	useEffect(
		() => {
			GeneratePlayer(params['player_name']).then((gen_plyr) => {
				setPlayer(gen_plyr);
			});
		},
		[ params ]
	);

	return (
		<React.Fragment>
			{player.name === '' && <p>Loading...</p>}
			{player.name !== '' && (
				<React.Fragment>
					<div className={styles.outer}>
						<div className={styles.image_div}>
							<PlayerImage image={player.image} alt="Image of player" />
						</div>

						<Card className={styles.content}>
							<h1>{player.name}</h1>

							<div className={styles.intro}>
								<p>{player.intro}</p>
							</div>
							
							<div className={styles.stats_div}>
								<p>Placeholder for player stats</p>
							</div>
						</Card>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default PlayerDetails;
