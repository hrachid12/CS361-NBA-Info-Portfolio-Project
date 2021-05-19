import Team from '../models/Team';
// const IMAGE_SCRAPER_URI = 'https://wiki-image-scraper.herokuapp.com/api/images/';
const TEXT_SCRAPER_URI = 'https://wiki-text-scraper.herokuapp.com/wiki/';

// const nba_teams = [
//     'Boston Celtics',
//     'Brooklyn Nets',
//     'New York Knicks',
//     'Philadelphia 76ers',
//     'Toronto Raptors',
//     'Chicago Bulls',
//     'Cleveland Cavaliers',
//     'Detroit Pistons',
//     'Indiana Pacers',
//     'Milwaukee Bucks',
//     'Atlanta Hawks',
//     'Charlotte Hornets',
//     'Miami Heat',
//     'Orlando Magic',
//     'Washington Wizards',
//     'Denver Nuggets',
//     'Minnesota Timberwolves',
//     'Oklahoma City Thunder',
//     'Portland Trail Blazers',
//     'Utah Jazz',
//     'Golden State Warriors',
//     'Los Angeles Clippers',
//     'Los Angeles Lakers', 
//     'Phoenix Suns',
//     'Sacramento Kings',
//     'Dallas Mavericks',
//     'Houston Rockets',
//     'Memphis Grizzlies',
//     'New Orleans Pelicans',
//     'San Antonio Spurs'
// ];

const teams = ['New York Knicks', 'Brooklyn Nets', 'Los Angeles Lakers'];

interface intro_req {
	Intro: string;
}

// interface img_req {
// 	images: string;
// }

interface player_req {
    "Current roster": [string[]]
    "Current roster[edit]": [string[]];
}


const GenerateTeams = async () => {
    let all_teams: Team[] = [];
    teams.forEach( async (team_name) => {
        // let image_res = await fetch(IMAGE_SCRAPER_URI + '?title=' + team_name.replace(' ', '_') + '&ct=logo');
        // let image = await image_res.json() as img_req;

        let text_res = await fetch(TEXT_SCRAPER_URI + team_name.replaceAll(' ', '_'));
        let text = await text_res.json() as intro_req;

        let player_res = await fetch(TEXT_SCRAPER_URI + team_name.replaceAll(' ', '_') + '/tables');
        let players_list = await player_res.json() as player_req;
        
        let players: string[];
        try {
            players = players_list["Current roster"].map( player => {
                return player[2]
            });
            players.shift();
            all_teams.push(new Team('https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png', team_name, text.Intro, players));
        } catch (error) {
            players = players_list["Current roster[edit]"].map( player => {
                return player[2]
            });
            players.shift();
            all_teams.push(new Team('https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/2560px-New_York_Knicks_logo.svg.png', team_name, text.Intro, players));
        }

        console.log('generating...');
    });
    return all_teams;
};

export default GenerateTeams;