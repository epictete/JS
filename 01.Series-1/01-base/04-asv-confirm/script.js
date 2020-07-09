
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');
    // YOUR CODE HERE
    let valid = false;
    while (!valid) {
        let age = prompt("Please enter you age :");
        let gender = prompt("Are you a male or a female ?");
        let town = prompt("Please enter your town :");
        valid = confirm("Your are " + age + " years old. You are a " + gender + " and you live in " + town + ".");
    } alert("Thank you!");
})();
