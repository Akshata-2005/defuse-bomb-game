let userInputEl = document.getElementById("userInputValue");
let timing = document.getElementById("countDown");
let countDown = 10;

let intervalId = setInterval(function() {
    countDown = countDown - 1;
    timing.textContent = countDown;
    if (countDown === 0) {
        timing.textContent = "BOOM";
        clearInterval(intervalId);
    }
}, 1000);

userInputEl.addEventListener("keydown", function(event) {
    let inputValue = userInputEl.value;
    if (event.key === "Enter" && inputValue === "defuse" && countDown !== 0) {
        timing.textContent = "You Did It!";
        clearInterval(intervalId);
    }
});