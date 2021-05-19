import Team from '../models/Team';
const IMAGE_SCRAPER_URI = 'https://gentle-bastion-22842.herokuapp.com/https://wiki-image-scraper.herokuapp.com/api/images/';
const TEXT_SCRAPER_URI = 'https://wiki-text-scraper.herokuapp.com/wiki/';
interface intro_req {
	Intro: string;
}

interface img_req {
	images: string;
}

interface player_req {
	'Current roster': [string[]],
	'Current roster[edit]': [string[]],
	'Roster[edit]': [string[]]
}

const GenerateTeam = async (team_name: string) => {
	let image_res = await fetch(IMAGE_SCRAPER_URI + '?title=' + team_name.replace(' ', '_') + '&ct=logo');
	let image = (await image_res.json()) as img_req;

	let text_res = await fetch(TEXT_SCRAPER_URI + team_name.replaceAll(' ', '_') + '/Intro');
	let text = (await text_res.json()) as intro_req;

	let player_res = await fetch(TEXT_SCRAPER_URI + team_name.replaceAll(' ', '_') + '/tables');
	let players_list = (await player_res.json()) as player_req;

	let players: string[];
	try {
		players = players_list['Current roster'].map((player) => {
			return player[2].replace(/\(TW\)/g, '');
		});
	} catch (error) {
		try {
			players = players_list['Current roster[edit]'].map((player) => {
				return player[2].replace(/\(TW\)/g, '');
			});
		} catch (error) {
			players = players_list['Roster[edit]'].map((player) => {
				return player[2].replace(/\(TW\)/g, '');
			});
		}
	}
	players.shift();
	players = players.map( player => {
		let temp = player.split(',');
		return temp[1].trim() + ' ' + temp[0].trim();
	});
	return new Team( image.images, team_name, text.Intro, players);
};

export default GenerateTeam;
