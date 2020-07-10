// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", function () {

        const randBird = Math.floor(Math.random() * birds.length);
        const randAdj = Math.floor(Math.random() * adjectives.size);

        if (birds[randBird].fem) {
            document.getElementById("target").innerHTML = "La " + birds[randBird].name + " " + [...adjectives][randAdj] + "e";
        } else {
            document.getElementById("target").innerHTML = "Le " + birds[randBird].name + " " + [...adjectives][randAdj];
        }
    })

})();
