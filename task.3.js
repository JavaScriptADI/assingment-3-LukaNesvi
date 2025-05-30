let Numbers = prompt("Put three numbers seperated by ( , )");
let NumberArray = Numbers.split(',').map(Number);

const SmallestNumber = Math.min(...NumberArray);
const LargestNumber = Math.max(...NumberArray);
const AverageRounded = Math.round((NumberArray[0] + NumberArray[1] + NumberArray[2]) / 3);

alert(
  "Smallest number: " + SmallestNumber + "\n" +
  "Largest number: " + LargestNumber + "\n" +
  "Average (rounded): " + AverageRounded
);