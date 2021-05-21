import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Card from '../components/UI/Card';
import PlayerList from '../components/Players/PlayerList';
import Team from '../models/Team';

import styles from './TeamDetails.module.css';

const TeamDetails: React.FC<{}> = (props) => {
	let team = useLocation().state as Team;

	console.log(team);

	return (
		<React.Fragment>
			{team === undefined && <Redirect to="/teams" exact />}
			{team !== undefined && (
				<React.Fragment>
					<div className={styles.outer}>
						<div className={styles.image_div}>
							<img src={team.image} alt="Team logo" className={styles.team_img} />

							<div className={styles.active_player_msg}>
								<p>
									The players in the roster table are the current active players on the team. Clicking
									on one of their names will redirect you to a page where you can find their seasonal
									stats.
								</p>
							</div>
						</div>

						<Card className={styles.content}>
							<h1>{team.name}</h1>

							<div className={styles.intro}>
								<p>{team.french}</p>
							</div>

							<PlayerList players={team.players.sort()} />
						</Card>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default TeamDetails;
