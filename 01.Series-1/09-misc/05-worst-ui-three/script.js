// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here

    let target = document.getElementById("target");
    let string = target.innerText;
    function zero(num) {
        return ("0" + num).slice(-2);
    }


    // One

    let one = document.getElementById("part-one");
    let oneMin = parseInt(one.getAttribute("data-min"), 10);
    let oneMax = parseInt(one.getAttribute("data-max"), 10);
    let newOne = oneMin;
    let oneButton = document.getElementById("fix-part-one");

    function randOne() {
        return Math.floor(Math.random() * (oneMax - oneMin) + 1) + oneMin;
    }

    oneButton.addEventListener("click", () => {
        newOne = randOne();
        let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
        target.innerHTML = newString;
        one.setAttribute("value", newOne);
    })

    // Two

    let two = document.getElementById("part-two");
    let twoMin = parseInt(two.getAttribute("data-min"), 10);
    let twoMax = parseInt(two.getAttribute("data-max"), 10);
    let newTwo = twoMin;
    let twoButton = document.getElementById("fix-part-two");

    function randtwo() {
        return Math.floor(Math.random() * (twoMax - twoMin) + 1) + twoMin;
    }

    twoButton.addEventListener("click", () => {
        newTwo = randtwo();
        let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
        target.innerHTML = newString;
        two.setAttribute("value", zero(newTwo));
    })

    // Three

    let three = document.getElementById("part-three");
    let threeMin = parseInt(three.getAttribute("data-min"), 10);
    let threeMax = parseInt(three.getAttribute("data-max"), 10);
    let newThree = threeMin;
    let threeButton = document.getElementById("fix-part-three");

    function randthree() {
        return Math.floor(Math.random() * (threeMax - threeMin) + 1) + threeMin;
    }

    threeButton.addEventListener("click", () => {
        newThree = randthree();
        let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
        target.innerHTML = newString;
        three.setAttribute("value", zero(newThree));
    })

    // Four

    let four = document.getElementById("part-four");
    let fourMin = parseInt(four.getAttribute("data-min"), 10);
    let fourMax = parseInt(four.getAttribute("data-max"), 10);
    let newFour = fourMin;
    let fourButton = document.getElementById("fix-part-four");

    function randfour() {
        return Math.floor(Math.random() * (fourMax - fourMin) + 1) + fourMin;
    }

    fourButton.addEventListener("click", () => {
        newFour = randfour();
        let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
        target.innerHTML = newString;
        four.setAttribute("value", zero(newFour));
    })

})();
