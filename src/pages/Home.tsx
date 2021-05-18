import TeamList from '../components/Teams/TeamList';
import Team from '../models/Team';
import styles from './Home.module.css';

const Home = () => {
	const teams = [
		new Team('https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png', 'Knicks'),
		new Team('https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png', 'Knicks'),
		new Team('https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png', 'Knicks'),
		new Team('https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png', 'Knicks'),
		new Team('https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg', 'Nets'),
		new Team('https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utah_Jazz_logo_%282016%29.svg/200px-Utah_Jazz_logo_%282016%29.svg.png', 'Jazz')
	];

	return (
		<div className={styles.main_div}>
            <h1>Home Page</h1>
			<div className={styles.player_msg}>
				<p>
					Welcome to NBA Info! You can find descriptions and statistics on all thirty teams and
                    all active players in the NBA! You can begin by choosing one of the teams below, and then
                    choosing an active player on that team. If you'd like to search for a specific player instead,
                    you can navigate to the "players" page by clicking the link above!
				</p>
			</div>

			<div className={styles.team_div}>
				<TeamList teams={teams} />
			</div>
		</div>
	);
};

export default Home;
