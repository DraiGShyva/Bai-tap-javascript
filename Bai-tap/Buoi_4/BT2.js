class Pet {
    constructor(name, animal_sounds) {
        this.name = name;
        this.animal_sounds = animal_sounds;
    }

    introduce() {
        console.log(`My name is ${this.name}.`);
    }

    talk() {
        console.log(this.animal_sounds);
    }
}

class Dog extends Pet {
    constructor(name, animal_sounds, geneus) {
        super(name, animal_sounds);
        this.geneus = geneus;
    }

    getGeneus() {
        console.log(`I am an animal of ${this.geneus}.`);
    }
}

var becgie = new Dog(this.name = 'Becgie', this.animal_sounds = 'Woof woof woof!!!', this.geneus = 'mammal');

becgie.introduce();
becgie.getGeneus();
becgie.talk();