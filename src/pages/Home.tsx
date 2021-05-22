import { useContext } from 'react';

import { LanguageContext } from '../store/language-context';

import Card from '../components/UI/Card';
import styles from './Home.module.css';

import { HOME_MSG } from '../CONSTANTS';

const Home: React.FC<{}> = () => {
	const langCxt = useContext(LanguageContext);

	return (
		<Card className={styles.main_div}>
			<div className={styles.player_msg}>
				{langCxt.language === 'english' && <p>{HOME_MSG.english}</p>}
				{langCxt.language === 'spanish' && <p>{HOME_MSG.spanish}</p>}
				{langCxt.language === 'french' && <p>{HOME_MSG.french}</p>}
			</div>
		</Card>
	);
};

export default Home;
