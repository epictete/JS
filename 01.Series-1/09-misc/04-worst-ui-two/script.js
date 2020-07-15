// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


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

    one.addEventListener("click", () => {
        if (newOne < oneMax) {
            newOne += 1;
        }
        let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
        target.innerHTML = newString;
        one.innerHTML = newOne;
    })

    // Two

    let two = document.getElementById("part-two");
    let twoMin = parseInt(two.getAttribute("data-min"), 10);
    let twoMax = parseInt(two.getAttribute("data-max"), 10);
    let newTwo = twoMin;

    two.addEventListener("click", () => {
        console.log(event.currentTarget);
        if (newTwo < twoMax) {
            newTwo += 1;
        }
        let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
        target.innerHTML = newString;
        two.innerHTML = zero(newTwo);
    })

    // Three

    let three = document.getElementById("part-three");
    let threeMin = parseInt(three.getAttribute("data-min"), 10);
    let threeMax = parseInt(three.getAttribute("data-max"), 10);
    let newThree = threeMin;

    three.addEventListener("click", () => {
        if (newThree < threeMax) {
            newThree += 1;
        }
        let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
        target.innerHTML = newString;
        three.innerHTML = zero(newThree);
    })

    // Four

    let four = document.getElementById("part-four");
    let fourMin = parseInt(four.getAttribute("data-min"), 10);
    let fourMax = parseInt(four.getAttribute("data-max"), 10);
    let newFour = fourMin;

    four.addEventListener("click", () => {
        if (newFour < fourMax) {
            newFour += 1;
        }
        let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
        target.innerHTML = newString;
        four.innerHTML = zero(newFour);
    })

})();
