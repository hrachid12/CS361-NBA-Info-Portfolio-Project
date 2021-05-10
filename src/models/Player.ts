
class Player {
    id: string;
    image: string;

    constructor(image: string) {
        this.image = image;
        this.id = Math.random().toString();
    }
}

export default Player;