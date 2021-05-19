import Player from '../models/Player';
const IMAGE_SCRAPER_URI = 'https://gentle-bastion-22842.herokuapp.com/https://wiki-image-scraper.herokuapp.com/api/images/';
const TEXT_SCRAPER_URI = 'https://wiki-text-scraper.herokuapp.com/wiki/';

interface intro_req {
	Intro: string;
}

interface img_req {
	images: string;
}

interface stats_req {
    "NBA": [string[]],
	"NBA[edit]": [string[]],
    "Regular season": [string[]],
	"Regular season[edit]": [string[]],
	"EuroLeague[edit]": [string[]]
}

const GeneratePlayer = async (player_name: string) => {
	let image_res = await fetch(IMAGE_SCRAPER_URI + '?title=' + player_name.replace(' ', '_') + '&ct=main');
	let image = (await image_res.json()) as img_req;

	let text_res = await fetch(TEXT_SCRAPER_URI + player_name.replaceAll(' ', '_') + '/Intro');
	let text = (await text_res.json()) as intro_req;

	let stats_res = await fetch(TEXT_SCRAPER_URI + player_name.replaceAll(' ', '_') + '/tables');
	let stats_list = (await stats_res.json()) as stats_req;

    let stats: [string[]];
    try {
		stats = [...stats_list['NBA']];
	} catch (error) {
		try {
			stats = [...stats_list['NBA[edit]']];
		} catch (error) {
			try {
				stats = [...stats_list['Regular season']];
			} catch (error) {
				try {
					stats = [...stats_list['Regular season[edit]']];
				} catch (error) {
					 try {
						 stats = [...stats_list['EuroLeague[edit]']];
					} catch (error) {
						stats = [['']];
					}
				}
			}
		}
	}

	stats.forEach( item => {
		if (parseInt(item[1])) {
			item.splice(1, 0, '-');
		} else if (item[0] === 'Career' || item[0] === 'All-Star') {
			item.splice(3, 0, '-');
		}
	});

	console.log(stats);

    return new Player(image.images, player_name, stats, text.Intro);
};

export default GeneratePlayer;
