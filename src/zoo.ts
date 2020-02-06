import { Dog } from './dog';
import { Cat } from './cat';

const fido = new Dog('Fido');
const lulu = new Cat('Lulu');

fido.speak();
lulu.speak();
fido.bark();
lulu.meow();

fido.eat(lulu);
