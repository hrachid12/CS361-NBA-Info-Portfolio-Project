
class Team {
    id: string;
    name: string;
    image: string;

    constructor(image: string, name: string) {
        this.name = name;
        this.image = image;
        this.id = Math.random().toString();
    }
}

export default Team;