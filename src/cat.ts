import { Animal } from "./animal";

export class Cat extends Animal {
    constructor(name: string) {
        super(name, 4, "meow");
    }

    meow() {
        console.log("The cat says", this.sound);
    }
}
