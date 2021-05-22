import React, { useState, useContext } from 'react';
import { LanguageContext } from '../store/language-context';

import PlayerList from '../components/Players/PlayerList';
import Card from '../components/UI/Card';
import Team from '../models/Team';

import { PLAYERS_MSG } from '../CONSTANTS';

import styles from './Players.module.css';

const Players: React.FC<{ teams: Team[] }> = (props) => {
	const [ searchFilter, setSearchFilter ] = useState('');
	const langCxt = useContext(LanguageContext);

	let players: string[] = [];
	props.teams.forEach((team) => {
		team.players.forEach((player) => {
			players.push(player);
		});
	});
	players.sort();

	const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchFilter(event.target.value);
	};

	return (
		<React.Fragment>
			<div className={styles.outer}>
				<Card className={styles.inner_content}>
					<div className={styles.active_player_msg}>
						{langCxt.language === 'english' && <p>{PLAYERS_MSG.english}</p>}
						{langCxt.language === 'spanish' && <p>{PLAYERS_MSG.spanish}</p>}
						{langCxt.language === 'french' && <p>{PLAYERS_MSG.french}</p>}
					</div>

					<br />

					<form className={styles.search_filter}>
						<div>
							<input type="text" value={searchFilter} onChange={searchChangeHandler} />
						</div>
					</form>

					<PlayerList
						players={players.filter((el) => el.toLowerCase().search(searchFilter.toLowerCase()) > -1)}
					/>
				</Card>
			</div>
		</React.Fragment>
	);
};

export default Players;
