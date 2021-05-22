import React, { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import Card from '../components/UI/Card';
import PlayerList from '../components/Players/PlayerList';
import Team from '../models/Team';

import { LanguageContext } from '../store/language-context';

import styles from './TeamDetails.module.css';

import { TEAM_DETAILS_MSG } from '../CONSTANTS';

const TeamDetails: React.FC<{}> = () => {
	let team = useLocation().state as Team;
	const langCtx = useContext(LanguageContext);

	return (
		<React.Fragment>
			{team === undefined && <Redirect to="/teams" exact />}
			{team !== undefined && (
				<React.Fragment>
					<div className={styles.outer}>
						<div className={styles.image_div}>
							<img src={team.image} alt="Team logo" className={styles.team_img} />

							<div className={styles.active_player_msg}>
								{langCtx.language === 'english' && <p>{TEAM_DETAILS_MSG.english}</p>}
								{langCtx.language === 'spanish' && <p>{TEAM_DETAILS_MSG.spanish}</p>}
								{langCtx.language === 'french' && <p>{TEAM_DETAILS_MSG.french}</p>}
							</div>
						</div>

						<Card className={styles.content}>
							<h1>{team.name}</h1>

							<div className={styles.intro}>
								{langCtx.language === 'english' && <p>{team.english}</p>}
								{langCtx.language === 'spanish' && <p>{team.spanish}</p>}
								{langCtx.language === 'french' && <p>{team.french}</p>}
							</div>

							<br />

							<PlayerList players={team.players.sort()} />
						</Card>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default TeamDetails;
