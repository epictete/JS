
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here

    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click", () => changeBg($btn.id)
        )
    );

    function changeBg(id) {
        document.body.style.backgroundColor = id;
    }

})();
