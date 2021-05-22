import { useContext, useState } from 'react';

import { LanguageContext } from '../store/language-context';

import Card from '../components/UI/Card';
import SearchFilter from '../components/UI/SearchFilter';
import TeamList from '../components/Teams/TeamList';
import Team from '../models/Team';

import styles from './Teams.module.css';

import { TEAMS_MSG } from '../CONSTANTS';

const Teams: React.FC<{ teams: Team[] }> = (props) => {
	const [ searchFilter, setSearchFilter ] = useState('');
	const langCxt = useContext(LanguageContext);

	const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchFilter(event.target.value);
	};

	return (
		<Card className={styles.main_div}>
			<div style={{ padding: '1rem' }}>
				<div className={styles.player_msg}>
					{langCxt.language === 'english' && <p>{TEAMS_MSG.english}</p>}
					{langCxt.language === 'spanish' && <p>{TEAMS_MSG.spanish}</p>}
					{langCxt.language === 'french' && <p>{TEAMS_MSG.french}</p>}
				</div>

				<br />

				<SearchFilter value={searchFilter} onChangeHandler={searchChangeHandler} />

				<div className={styles.team_div}>
					{props.teams.length > 0 && (
						<TeamList
							teams={props.teams
								.sort()
								.filter((el) => el.name.toLowerCase().search(searchFilter.toLowerCase()) > -1)}
						/>
					)}
					{props.teams.length === 0 && <p>Loading... (This may take a moment.)</p>}
				</div>
			</div>
		</Card>
	);
};

export default Teams;
