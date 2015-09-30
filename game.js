var numCorrect = 0;

var q1 = prompt("Do I like pizza? (yes or no)");
console.log(q1);
if(q1.toUpperCase() === "YES" || q1.toUpperCase() === "Y") {
	numCorrect++;
	alert('Correct! Of course I love pizza!');
} else {
	alert('Wrong, I actually like pizza of all sorts.');
}
var q2 = prompt("Do I like beer? (yes or no)");
console.log(q2);
if(q2.toUpperCase() === "YES" || q2.toUpperCase() === "Y"){
	numCorrect++;
	alert('Correct! I\'m a beeraholic!');
} else {
	alert('Wrong, who doesn\'t love a good brew?');
}

var q3 = prompt("Did it occur to me just now that I should leave what I'm doing and go get pizza and beer? (yes or no)");
console.log(q3);
if(q3.toUpperCase() === "YES" || q3.toUpperCase() === "Y"){
	numCorrect++;
	alert('Correct! Let\'s go!');
} else {
	alert('Wrong, just go home...');
}

document.write("You got " + numCorrect + " out of 3 questions right");

alert("Your answer to question 1 is: " + q1);
alert("Your answer to question 2 is: " + q2);
alert("Your answer to question 3 is: " + q3);

