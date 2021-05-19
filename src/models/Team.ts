
class Team {
    id: string;
    name: string;
    image: string;
    intro: string;
    players: string[]


    constructor(image: string, name: string, intro: string, players: string[]) {
        this.id = Math.random().toString();
        this.name = name;
        this.image = image;
        this.intro = intro;
        this.players = players;
    }
}

export default Team;