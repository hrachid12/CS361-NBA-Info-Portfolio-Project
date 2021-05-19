import Card from '../components/UI/Card';
import TeamList from '../components/Teams/TeamList';
import Team from '../models/Team';

import styles from './Teams.module.css';

const Teams: React.FC<{ teams: Team[] }> = (props) => {
	return (
		<Card className={styles.main_div}>
			<div style={{ padding: '1rem' }}>
				<div className={styles.player_msg}>
					<p>
						Choosing one of the thirty teams below will take you to the team page where you can find a brief
						history of the team and a roster table with the current active players on the team's roster. If
						you are looking for a specific player and you are unsure of which team they are on, you can go
						to the players page above and find all active players in the NBA.
					</p>
				</div>

				<div className={styles.team_div}>
					{props.teams.length > 0 && <TeamList teams={props.teams} />}
					{props.teams.length === 0 && <p>Loading... (This may take a moment.)</p>}
				</div>
			</div>
		</Card>
	);
};

export default Teams;
