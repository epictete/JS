//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayHello() {
            console.log(`Hello, ${this.firstname} ${this.lastname}`);
        }
    }


    document.getElementById("run").addEventListener("click", () => {
        new Person("John", "Laterre").sayHello();
    })

})();
