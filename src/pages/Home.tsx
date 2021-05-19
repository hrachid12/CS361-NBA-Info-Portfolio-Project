import Card from '../components/UI/Card';
import styles from './Home.module.css';

const Home: React.FC<{}> = (props) => {
	return (
		<Card className={styles.main_div}>
			<div className={styles.player_msg}>
				<p>
					Welcome to NBA Info! You can find descriptions and statistics on all thirty teams and
                    all active players in the NBA! You can begin by either naviagting to the team page to 
					get information on a team's roster and a brief history, or you can navigate to the player
					page where you can find an entire list of active NBA players. Then, on either page, you can
					click on a player's name to see their season stats.
				</p>
			</div>
		</Card>
	);
};

export default Home;
