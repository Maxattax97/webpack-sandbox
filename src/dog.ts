import { Animal } from "./animal";

export class Dog extends Animal {
    constructor(name: string) {
        super(name, 4, "bark");
    }

    bark() {
        console.log("The dog says", this.sound);
    }
}
