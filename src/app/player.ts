import { identifierModuleUrl } from '@angular/compiler';

export class Player {
    private id: number;
    private name: string;
    private points: number;

    constructor(name: string) {
        this.name = name;
        this.points = 0;
    }

    setUserId(id: number) {
        this.id = id;
    }

    getUserId(): number {
        return this.id;
    }
}