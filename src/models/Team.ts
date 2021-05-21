
class Team {
    id: string;
    name: string;
    image: string;
    english: string;
    spanish: string;
    french: string;
    players: string[]


    constructor(image: string, name: string, english: string, spanish: string, french: string, players: string[]) {
        this.id = Math.random().toString();
        this.name = name;
        this.image = image;
        this.english = english;
        this.spanish = spanish;
        this.french = french;
        this.players = players;
    }
}

export default Team;