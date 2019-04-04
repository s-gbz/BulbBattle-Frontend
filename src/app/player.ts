export class Player {
    private id: number;
    private name: string;
    private points: number;

    constructor(name: string) {
        this.name = name;
        this.points = 0;
    }
}