// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async () => {
        const posts = await window.lib.getPosts();
        console.log(posts);
    })

})();
