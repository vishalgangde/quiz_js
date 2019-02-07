
function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else {
		//show questions
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
	
	
	//show options
	var choices = quiz.getQuestionIndex().choices;
	//console.log(choices);
	for(var i = 0; i < choices.length; i++){
		document.getElementById('choice'+(i+1)).innerHTML = choices[i];
		//element.innerHTML = choices[i];
		guess("btn" + i, choices[i]);
	}
		showProgress();
   }	
};

//Choose one from given objectives
function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
};

//Current Question no and Remaining Questions
function showProgress(){
	var currentQuestionNumber = quiz.questionsIndex+1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

//Show your Total Marks(Result)
function showScores(){
	var gameOverHTML = "<h1>Result</h1>";
	gameOverHTML += "<h2 id='score'>Your Scores:" + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHTML;
};


//create Questions

var questions = [new Question ("Which one is not an object oriented programming language?",["java","C#","C++","C"],"C"),

				new Question ("which language is used for styling web pages?",["HTML","JQuery","CSS","XML"],"CSS"),
				
				new Question ("There are ----- main components of Object Oriented Programming?",["1","6","2","4"],"4"),
				
				new Question ("Which language is used for web apps?",["PHP","Python","JavaScript","All"],"All"),
				
				new Question ("Which keyword can be used for overloading?",["this","operator","super","static"],"operator"),
				
				new Question ("Which OOPS concept exposes only necessary information to the calling functions?",["Inheritance","Encapsulation","Polymorphism","Abstraction"],"Encapsulation"),
				
				new Question ("How many instances can be created for an abstract class?",["0","1","5","6"],"0"),

				new Question ("Which is the parent class from which another class inherits.?",["Sibling class","Drived class","Super class","Sub class"],"Super class"),
				
				new Question ("Which class is the most generalized class , and it is said to be a root class.",["Sibling class","Base class","Super class","Sub class"],"Base class"),
				
				new Question ("Can static method use non static members?",["Yes","No"],"No"),
				
				new Question ("Do we require parameter for constructors?",["Yes","No"],"No"),
				
				new Question ("Which operators cannot be overloaded?",["Scope resolution operator","Logical operator","Bitwise operator","Ternory operator"],"Scope resolution operator"),
				
				new Question ("A virtual function can be declared as Pure by using the…",["operator=1","operator=3","operator=0","operator=2"],"operator=0"),
				
				new Question ("Which constructor has no parameters?",["parameter constructor","null constructor","default constructor","Copy constructor"],"default constructor"),
				
				new Question ("In argument value passed will get modified only inside the function is called",["call by value","call by reference","call by function","call by variable"],"call by value"),
				
				new Question ("How many arguments a ternary operator takes ?",["One","Three","Two","Four"],"Three"),
				
				new Question ("What is an object?",["instance of object","instance of method","instance of class"],"instance of class"),
				
				new Question ("What is OOPS?",["Object Oriented Programming Structure","Object Oriented Programming System",
				"Object Oriented Processing System"],"Object Oriented Programming System")
				
				];
				
				
				
				
				
				var quiz = new Quiz(questions);
				populate();
				


