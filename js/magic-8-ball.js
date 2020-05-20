//PSEUDOCODE
// OBJECT Magic 8 - ball
// PROPERTY list of answers = ["Most likely", "Yes, definitely", "Don't count on it", "Cannot predict now", "Ask again later", "Maybe"]

// FUNCTION Ask magic 8 - ball a question
// INPUT Ask the magic 8 - ball a question, shake the ball, magic 8 - ball picks answer from list of answers
// OUTPUT Magic 8 - ball answer
// STOP FUNCTION

// RUN FUNCTION Ask magic 8 - ball a question
// INPUT "Will I become good at cooking?"

$(document).ready(function() {
var magic8Ball = {};
magic8Ball.listOfAnswers = ["Most likely", "Yes, definitely", "Don't count on it", "Cannot predict now", "Ask again later", "Maybe"];
magic8Ball.askQuestion = function (question) {
    var randomAnswer = Math.floor(Math.random() * this.listOfAnswers.length);
    var magic8BallAnswer = this.listOfAnswers[randomAnswer];

    $("#answer").text(magic8BallAnswer);
    
    console.log(question);
    console.log(magic8BallAnswer);
};

var onClick = function() {
	var question = prompt("Ask me a question.");
	magic8Ball.askQuestion(question);
};

$("#questionButton").click(onClick);

});