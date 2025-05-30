const PasswordParts = "qwertyuiopasdfghjklzxcvbnm1234567890!@$*";

let SecretCode = "";
for (let counter = 0; counter < 8; counter++) {

const RandomPosition = Math.floor(Math.random() * PasswordParts.length);
SecretCode += PasswordParts[RandomPosition];

}

alert("Your fresh password: " + SecretCode);