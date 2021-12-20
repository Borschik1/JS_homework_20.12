let fs = require('fs');
let arg = process.argv;

inputData = fs.readFileSync('text.txt');
inputData = inputData.toString();

k = fs.readFileSync('shift.txt');
k = parseInt(k.toString());

answer = "";
for (i = 0; i < inputData.length; i++){
	if (65 <= inputData[i].charCodeAt() && inputData[i].charCodeAt() <= 90){
		answer += String.fromCharCode((inputData[i].charCodeAt() - 65 + k) % 26 + 65);
	} else if (97 <= inputData[i].charCodeAt() && inputData[i].charCodeAt() <= 122) {
		answer += String.fromCharCode((inputData[i].charCodeAt() - 97 + k) % 26 + 97);
	} else {
		answer += inputData[i];
	}
}
fs.writeFileSync('coded.txt', answer);