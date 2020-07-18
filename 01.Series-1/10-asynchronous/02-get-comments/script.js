// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () =>
        window.lib.getPosts((error, array) =>
            array.forEach(element =>
                window.lib.getComments(element.id, (error, comments) =>
                    element.comments = comments,
                    console.log(element)
                )
            )
        )
    )

})();
