// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts().then((result) => {
            result.forEach(element => window.lib.getComments(element.id).then((comments) => {
                element.comments = comments;
                console.log(element);
            }))
        })
    })

})();
