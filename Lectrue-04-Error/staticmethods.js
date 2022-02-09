class Dog{
    constructor(name){
        this._name = name;
    }

    introduce(){
        console.log("This is"+this._name+"!");
    }
    // Staic Methods
    static bark(){
        console.log("Woof!");
    }
}

const  myDog = new Dog("Buster");
myDog.introduce();

const myDOg2 = new Dog("Pluto");
myDOg2.introduce();

Dog.bark();