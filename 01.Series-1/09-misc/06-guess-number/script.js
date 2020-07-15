// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here

    window.onload = welcome;

    function welcome() {
        const x = Math.floor(Math.random() * 100 + 1);
        console.log(x);
        let num = prompt("Please guess a number between 1 and 100 :");
        guess(x, num);
    }

    function guess(x, num) {
        let y = 1;
        while (num != x) {
            if (num > x) {
                num = prompt("Too high, pleaase try again :");
                y += 1;
            } else if (num < x) {
                num = prompt("Too low, please try again :");
                y += 1;
            }
        }
        alert(`That's it! You needed ${y} guesses.`);
    }

})();
