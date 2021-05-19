import Card from '../components/UI/Card';
import TeamList from '../components/Teams/TeamList';
import Team from '../models/Team';

import styles from './Teams.module.css';

const Teams: React.FC<{ teams: Team[] }> = (props) => {
	// const team = [
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png',
	// 		'New York Knicks',
	// 		'a',
	// 		[ 'players' ]
	// 	),
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png',
	// 		'New York Knicks',
	// 		'a',
	// 		[ 'players' ]
	// 	),
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png',
	// 		'New York Knicks',
	// 		'a',
	// 		[ 'players' ]
	// 	),
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png',
	// 		'New York Knicks',
	// 		'a',
	// 		[ 'players' ]
	// 	),
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg',
	// 		'Brookyln Nets',
	// 		'a',
	// 		[ 'players' ]
	// 	),
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utah_Jazz_logo_%282016%29.svg/200px-Utah_Jazz_logo_%282016%29.svg.png',
	// 		'Utah Jazz',
	// 		'a',
	// 		[ 'players' ]
	// 	),
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png',
	// 		'New York Knicks',
	// 		'a',
	// 		[ 'players' ]
	// 	),
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png',
	// 		'New York Knicks',
	// 		'a',
	// 		[ 'players' ]
	// 	),
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png',
	// 		'New York Knicks',
	// 		'a',
	// 		[ 'players' ]
	// 	),
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png',
	// 		'New York Knicks',
	// 		'a',
	// 		[ 'players' ]
	// 	),
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg',
	// 		'Brookyln Nets',
	// 		'a',
	// 		[ 'players' ]
	// 	),
	// 	new Team(
	// 		'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utah_Jazz_logo_%282016%29.svg/200px-Utah_Jazz_logo_%282016%29.svg.png',
	// 		'Utah Jazz',
	// 		'a',
	// 		[ 'players' ]
	// 	)
	// ];

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
					{props.teams.length === 0 && <p>Loading... (Please wait and then navigate to another page and then back to this one)</p>}
				</div>
			</div>
		</Card>
	);
};

export default Teams;
