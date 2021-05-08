import styles from './Home.module.css';

const Home = () => {
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
				<p>Placeholder for all 30 NBA teams</p>
			</div>
		</div>
	);
};

export default Home;
