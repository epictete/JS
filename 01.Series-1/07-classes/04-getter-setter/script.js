// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return `${this.firstname} ${this.lastname}`;
        }

        set name(value) {
            [this.firstname, this.lastname] = value.split(" ");
        }
    }

    document.getElementById("run").addEventListener("click", () => {

        const person1 = new Person("John", "Laterre");
        console.log(person1.name);

        person1.name = "Sam Smith";
        console.log(`${person1.firstname} ${person1.lastname}`);

    })

})();
