import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Card from '../components/UI/Card';
import Team from '../models/Team';

import styles from './TeamDetails.module.css'

interface RouteParams {
	team_name: string;
}

const TeamDetails: React.FC<{}> = (props) => {
    const params = useParams<RouteParams>();
	let team = useLocation().state as Team;

    console.log(params['team_name']);
	console.log(team.image, team.name);

    return (
        <React.Fragment>
			<h1>{team.name}</h1>

			<div className={styles.outer}>
				<div className={styles.image_div}>
					<img src={team.image} alt="Team logo" className={styles.team_img} />

                    <div className={styles.active_player_msg} >
                        <p>The players in the roster table are the current active players on the team. Clicking on
                            one of their names will redirect you to a page where you can find their seasonal stats.
                        </p>
                    </div>
				</div>

				<Card className={styles.content}>
					<div className={styles.intro}>
						<p>{team.intro}</p>
					</div>
					<div className={styles.stats_div}>
						<p>Placeholder for player stats</p>
					</div>
				</Card>
			</div>
		</React.Fragment>
    );
}

export default TeamDetails;