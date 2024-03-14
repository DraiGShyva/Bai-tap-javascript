class Pet {
    constructor(name, animal_sounds) {
        this.name = name;
        this.animal_sounds = animal_sounds;
    }

    introduce() {
        console.log(`Tôi tên là ${this.name}.`);
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
        console.log(`Tôi là động vật ${this.geneus}.`);
    }
}

var becgie = new Dog(this.name = 'Becgie', this.animal_sounds = 'gâu gâu gâu!!!', this.geneus = 'có vú');

becgie.introduce();
becgie.getGeneus();
becgie.talk();