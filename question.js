


//Question, options and Correct Answer
function Question(text, choices, answer){       //constructor function
		this.text = text;
		this.choices = choices;
		this.answer = answer;
		
}

//using prototype (choose option is correct)
Question.prototype.isCorrectAnswer = function(choice){    
	return choice === this.answer;
	
}