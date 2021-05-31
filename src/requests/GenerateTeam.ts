import Team from '../models/Team';
import Translate from './Translate';
import { IMAGE_SCRAPER_URI, TEXT_SCRAPER_URI } from '../CONSTANTS';

interface intro_req {
	Intro: string;
}

interface img_req {
	images: string;
}

interface player_req {
	'Current roster': [string[]];
	'Current roster[edit]': [string[]];
	'Roster[edit]': [string[]];
}

const GenerateTeam = async (team_name: string) => {
	const image_res = await fetch(IMAGE_SCRAPER_URI + '?title=' + team_name.replace(' ', '_') + '&ct=logo');
	const image = (await image_res.json()) as img_req;

	const text_res = await fetch(TEXT_SCRAPER_URI + team_name.replaceAll(' ', '_') + '/Intro');
	const text = (await text_res.json()) as intro_req;

	const spanish = await Translate(text.Intro, 'en', 'es');
	const french = await Translate(text.Intro, 'en', 'fr');

	const player_res = await fetch(TEXT_SCRAPER_URI + team_name.replaceAll(' ', '_') + '/tables');
	const players_list = (await player_res.json()) as player_req;

	let players: string[];
	try {
		players = players_list['Current roster'].map((player) => {
			return player[2]
				.replace(/\(TW\)/g, '')
				.replace(/\(C\)/g, '')
				.replace(/\(DP\)/g, '')
				.replace(/\(FA\)/g, '')
				.replace(/\(S\)/g, '')
				.replace(/\(GL\)/g, '')
				.replace(/\(L\)/g, '');
		});
	} catch (error) {
		try {
			players = players_list['Current roster[edit]'].map((player) => {
				return player[2]
					.replace(/\(TW\)/g, '')
					.replace(/\(C\)/g, '')
					.replace(/\(DP\)/g, '')
					.replace(/\(FA\)/g, '')
					.replace(/\(S\)/g, '')
					.replace(/\(GL\)/g, '')
					.replace(/\(L\)/g, '');
			});
		} catch (error) {
			players = players_list['Roster[edit]'].map((player) => {
				return player[2]
					.replace(/\(TW\)/g, '')
					.replace(/\(C\)/g, '')
					.replace(/\(DP\)/g, '')
					.replace(/\(FA\)/g, '')
					.replace(/\(S\)/g, '')
					.replace(/\(GL\)/g, '')
					.replace(/\(L\)/g, '');
			});
		}
	}
	players.shift();
	players = players.map((player) => {
		let temp = player.split(',');
		return temp[1].trim() + ' ' + temp[0].trim();
	});
	return new Team(image.images, team_name, text.Intro, spanish, french, players);
};

export default GenerateTeam;
