import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../components/UI/Card';
import PlayerImage from '../components/Players/PlayerImage';
import Player from '../models/Player';
import PlayerStats from '../components/Players/PlayerStats';
import GeneratePlayer from '../requests/GeneratePlayer';

import styles from './PlayerDetails.module.css';

interface RouteParams {
	player_name: string;
}

const PlayerDetails: React.FC = (props) => {
	const params = useParams<RouteParams>();
	const [ player, setPlayer ] = useState<Player>(new Player('', '', [ [ '' ] ], '', '', ''));

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
			{player.name === '' && <Card className={styles.loading}><p>Loading...</p></Card>}
			{player.name !== '' && player.stats !== [ [ '' ] ] && (
				<React.Fragment>
					<div className={styles.outer}>
						<div className={styles.image_div}>
							<PlayerImage image={player.image} alt="Image of player" />
						</div>

						<Card className={styles.content}>
							<h1>{player.name}</h1>

							<div className={styles.intro}>
								<p>{player.english}</p>
							</div>
							
							<PlayerStats player={player} />
						</Card>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default PlayerDetails;
