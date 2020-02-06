export class Animal {
    constructor(public name: string, public legs: number, protected sound: string) {
        
    }

    speak() {
        console.log(`${this.name} says ${this.sound}`);
    }

    eat(target: Animal) {
        console.log(`${this.name} devours ${target.name}`);
    }
}
