// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }

        static greeting = "Woof";
    }


    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }

        static greeting = "Meow";
    }

    document.getElementById("run").addEventListener("click", () => {

        const dog1 = new Dog("Wolfy");
        const cat1 = new Cat("O'Malley");

        console.log(dog1.sayHello());
        console.log(cat1.sayHello());

    })

})();
