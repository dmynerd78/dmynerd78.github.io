console.log("%c~~~~~~~~~~~~~~~~~~~~~~~~~", "color: #BBC0C2;");

console.log("%c(c) dmynerd78", "color: #FB9C10;");
console.log("%c<INSERT LOGO ASCII HERE />", "color: red;");

console.log("%c~~~~~~~~~~~~~~~~~~~~~~~~~", "color: #BBC0C2;");

var food = function(answer) {
	if (answer === undefined) {
		options = ["FINE THEN! No food for you!!!", "You want food too? YAY! :D"]
		console.log("Do you want food? Answer with 'food(1)' if you do! Do 'food(0)' if you don't want some!")
	} else {
		console.log(options[answer]);
	}

};