var numCorrect = 0;

var elOne = document.getElementById("one");
var elTwo = document.getElementById("two");
var elThree = document.getElementById("three");
var elResults = document.getElementById("results");
var questions = ["Do I like pizza?", "Do I like beer?", "Did it occur to me just now that I should leave what I'm doing and go get pizza and beer?"];
var answers = ["YES", "Y", "NO", "N"];	

function question1() {
	var q1 = prompt("Do I like pizza?");

	console.log(q1);

	if(q1.toUpperCase() === "YES" || q1.toUpperCase() === "Y") {
		numCorrect++;
		elOne.textContent=('Correct! Of course I love pizza!');
	} else {
		elOne.textContent=('Wrong, I actually like pizza of all sorts.');
	}
}

function question2() {
	var q2 = prompt("Do I like beer?");

	console.log(q2);

	if(q2.toUpperCase() === "YES" || q2.toUpperCase() === "Y"){
		numCorrect++;
		elTwo.textContent=('Correct! I\'m a beeraholic!');
	} else {
		elTwo.textContent=('Wrong, who doesn\'t love a good brew?');
	}
	
}

function question3() {
	var q3 = prompt("Did it occur to me just now that I should leave what I'm doing and go get pizza and beer?");

	console.log(q3);

	if(q3.toUpperCase() === "YES" || q3.toUpperCase() === "Y"){
		numCorrect++;
		elThree.textContent=('Correct! Let\'s go!');
	} else {
		elThree.textContent=('Wrong, just go home...');
	}	
}

question1();
question2();
question3();


elResults.textContent=("You got " + numCorrect + " out of 3 questions right. Thanks for playing!");
