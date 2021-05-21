
class Player {
    id: string;
    image: string;
    name: string;
    stats: [string[]];
    english: string;
    spanish: string;
    french: string;

    constructor(image: string, name: string, stats: [string[]], english: string, spanish: string, french: string) {
        this.id = Math.random().toString();
        this.image = image;
        this.name = name;
        this.stats = stats;
        this.english = english;
        this.spanish = spanish;
        this.french = french;
    }
}

export default Player;