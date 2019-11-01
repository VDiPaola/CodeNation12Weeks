/*
Activity(2): Cyber Pet
Cyber pet time!
User selects the kind of animal they’d like (dog, cat, rabbit) and you have to play with it, feed it, give it drinks etc.

There should be consequences across the board

– if you don’t play, it gets bored, if you do, it’s happy, but gets thirsty
*/



class Pet{
constructor(name, age, type, colour){

    this._name = name;
    this._age = age;
    this._type = type;
    this._colour = colour;

    this._happiness = 10;
    this._thirst = 5;
    this._hunger = 5;

}
eat(){
    console.log(this._name + " eats");
    this.changeStats(2, -1, -1);

}
drink(){
    console.log(this._name + " drinks");
    this.changeStats(-1, 2, -1);
}
play(){
    console.log("You play with " + this._name)
    this.changeStats(-1, -1, 2);
}
changeStats(hunger, thirst, happiness){
    this._hunger += hunger;
    this._thirst += thirst;
    this._happiness += happiness;
    this.showStats();
}

showStats(){
    console.log("hunger: " + this._hunger + ", thirst: " + this._thirst + ", happiness: " + this._happiness);
}


}

class Dog extends Pet{
    constructor(name, age, colour, breed){
        super(name, age, "dog", colour);
        this._breed = breed;
    }
    bark(){
        console.log(this._name + " barks");
    }
}

class Cat extends Pet{
    constructor(name, age, colour){
        super(name, age, "cat", colour);
    }
    meow(){
        console.log(this._name + " meows");
    }
}

let name = "floof";
let age = 2;
let colour = "red";
let breed = "poodle";


let woofy = new Dog(name, age, colour, breed);

woofy.bark();

woofy.eat();

woofy.drink();

woofy.play();

