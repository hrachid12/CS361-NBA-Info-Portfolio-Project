
class Player {
    id: string;
    image: string;
    name: string;
    stats: [string[]];
    intro: string;

    constructor(image: string, name: string, stats: [string[]], intro: string) {
        this.id = Math.random().toString();
        this.image = image;
        this.name = name;
        this.stats = stats;
        this.intro = intro;
    }
}

export default Player;