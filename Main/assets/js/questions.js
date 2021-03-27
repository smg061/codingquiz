class question {
    constructor(question, answers, correctAnswer) {
        this.answers = answers;
        this.question = question;
        this.correctAnswer = correctAnswer;
    }
    
}


var question1 = new question(
    "Which of the following is not primitive types in Javascript",
    ["Boolean", "String", "Class", "Number"], 
    "Class");

var question2 = new question("Whats is daby daby doo?",
 ["scroppy", "boppy", "struppy", "bubby"],
  "boppy");


var question3 = new question("Ya like jazz?", 
["yeh", "nah", "get lost, Barry", "bzzzz"],
"bzzzz");