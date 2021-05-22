import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../components/UI/Card';
import { LanguageContext } from '../store/language-context';
import { PlayerContext } from '../store/player-context';
import PlayerImage from '../components/Players/PlayerImage';
import Player from '../models/Player';
import PlayerStats from '../components/Players/PlayerStats';
import GeneratePlayer from '../requests/GeneratePlayer';

import styles from './PlayerDetails.module.css';

interface RouteParams {
	player_name: string;
}

const PlayerDetails = () => {
	const params = useParams<RouteParams>();
	const [ player, setPlayer ] = useState<Player>(new Player('', '', [ [ '' ] ], '', '', ''));
	
	const langCtx = useContext(LanguageContext);
	const plyrCtx = useContext(PlayerContext);

	useEffect(
		() => {
			let plyr = plyrCtx.getPlayer(params['player_name']);

			if (plyr === undefined) {
				GeneratePlayer(params['player_name']).then((gen_plyr) => {
					setPlayer(gen_plyr);
					plyrCtx.addPlayer(gen_plyr);
				});
			} else {
				setPlayer(plyr);
			}
		},
		[ params, plyrCtx ]
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
								{langCtx.language === 'english' && <p>{player.english}</p>}
								{langCtx.language === 'spanish' && <p>{player.spanish}</p>}
								{langCtx.language === 'french' && <p>{player.french}</p>}
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
