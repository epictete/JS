// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", function () {
        const person = {
            intro: function () {
                console.log(`Hello, my name is ${this.firstname} ${this.lastname}, and I am ${this.age} years old. I am from ${this.city} in ${this.country}.`);
            }
        };
        const me = Object.create(person);
        me.lastname = "Laterre";
        me.firstname = "John";
        me.age = 36;
        me.city = "Marcinelle";
        me.country = "Belgium";
        me.intro();
    })

})();
