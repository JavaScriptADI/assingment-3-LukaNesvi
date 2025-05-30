let Text = prompt("Enter a sentence:");
const CharacterCount = Text.length;
let Words = Text.split(" ");
const WordCount = Words.length;
//...
const LowerText = Text.toLowerCase();
const HasJavascript = LowerText.includes("javascript");
//...
alert(
  "Total Characters: " + CharacterCount + "\n" +
  "Total Words: " + WordCount + "\n" +
  "Contains 'JavaScript': " + HasJavascript
);