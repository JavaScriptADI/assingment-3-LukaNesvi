let Number = Math.floor(Math.random() * 10) + 1;
let Guess = prompt("Guess my number (1-10):");

if (Guess == Number) {
    alert("You win! Good guess!");
} else if (Guess < Number) {
    alert("Too small! My number was " + Number);
} else {
    alert("Too big! My number was " + Number);
}