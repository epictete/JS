// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here

    class Hero {
        constructor(name, alterEgo, abilities) {
            this.name = name;
            this.alterEgo = alterEgo;
            this.abilities = abilities;
        }
    }

    const name = document.getElementById("hero-name");
    const alterEgo = document.getElementById("hero-alter-ego");
    const abilities = document.getElementById("hero-powers");

    document.getElementById("run").addEventListener("click", async () => {

        if (name.value === "" || alterEgo.value === "" || abilities.value === "") {
            alert("Please fill in every field");
        } else {
            let powersArray = abilities.value.split(",");
            let newHero = new Hero(name.value, alterEgo.value, powersArray);

            const rawResponse = await fetch('http://localhost:3000/heroes', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newHero)
            });

            const content = await rawResponse.json();

            console.log(content);
        }
    });

})();
