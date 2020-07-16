// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here

    class Hero {
        constructor(name, alterEgo, powers) {
            this.name = name;
            this.alterEgo = alterEgo;
            this.powers = powers;
        }
    }

    let heroes = [];

    document.getElementById("run").addEventListener("click", () => {

        const name = document.getElementById("hero-name");
        const alterEgo = document.getElementById("hero-alter-ego");
        const powers = document.getElementById("hero-powers");

        if (name.value === "" || alterEgo.value === "" || powers.value === "") {
            alert("Please fill in every field");
        } else {
            let powersArray = powers.value.split(",");
            console.log(powersArray);
            let newHero = new Hero(name.value, alterEgo.value, powersArray);
            heroes.push(newHero);
            console.log(heroes);
        }

    });

})();
