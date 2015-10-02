var numCorrect = 0;
var elOne = document.getElementById("one");
var elTwo = document.getElementById("two");
var elThree = document.getElementById("three");
var elResults = document.getElementById("results");
var questions = ["Do I like pizza?", "Do I like beer?", "Did it occur to me just now that I should leave what I'm doing and go get pizza and beer?"];
var answers = ["YES", "Y", "NO", "N"];	
var elImg1 = document.getElementById('img_contain1');
var elImg2 = document.getElementById('img_contain2');
var elImg3 = document.getElementById('img_contain3');

function question1() {
	var q1 = prompt("Do I like pizza?");

	console.log(q1);

	if(q1.toUpperCase() === "YES" || q1.toUpperCase() === "Y") {
		numCorrect++;
		elImg1.innerHTML = ("<img src='images/success-kid.png' />");
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
		elImg2.innerHTML = ("<img src='images/success-rice.jpg' />");
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
		elImg3.innerHTML = ("<img src='images/success-Colbert.gif-c200' />");
		elThree.textContent=('Correct! Let\'s go!');
	} else {
		elThree.textContent=('Wrong, just go home...');
	}	
}

function getResults(){
		elResults.textContent=("You got " + numCorrect + " out of 3 questions right. Thanks for playing!");
}

question1();
window.setTimeout(question2, 500);
window.setTimeout(question3, 1000);
window.setTimeout(getResults, 1500);


console.log(numCorrect);
