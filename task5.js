const Age = Number(prompt("Please enter your age:"));

let AgeGroup;
if (Age < 0) {
    AgeGroup = "Invalid age";
} else if (Age <= 12) {
    AgeGroup = "Child";
} else if (Age <= 17) {
    AgeGroup = "Teenager";
} else if (Age <= 64) {
    AgeGroup = "Adult";
} else {
    AgeGroup = "Senior";
}

console.log("Age Group:", AgeGroup);
alert(`you are ${AgeGroup}`);