class question {
    constructor(question, answers, correctAnswer) {
        this.answers = answers;
        this.question = question;
        this.correctAnswer = correctAnswer;
    }
    
}

var question1 = new question(
    "Which of the following is not a primitive type in Javascript",
    ["Boolean", "String", "Class", "Number"], 
    "Class");

var question2 = new question("______ tag is an extension to HTML that can enclose any number of JavaScript statements",
    ["Link", "Script", "DOM", "Body"],
    "Script");


var question3 = new question("The _______ method of an Array object adds and/or removes elements from an array", 
    ["Reverse", "Append", "Switch", "Splice"],
    "Splice");


 var question4 = new question("Using _______ statement is how you test for a specific condition.",
  ["switch", "select", "for", "if"],
   "if")

var question5 = new question("6. Which of the following is the correct syntax to display 'this quiz is fun!' in an alert box using JavaScript?",
    ["alert-box('this quiz is fun!')", "confirm('this quiz is fun!')", "msgbox('this quiz is fun!')", "alert('this quiz is fun!')"],
    "alert('this quiz is fun!')")

