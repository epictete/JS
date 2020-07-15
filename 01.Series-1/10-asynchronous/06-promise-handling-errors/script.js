// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons().then((valeur) => {
            console.log(valeur);
        }, (raison) => {
            console.error(raison);
        })
    })

})();
