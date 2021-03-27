var startButtonEl = document.getElementById("start")
var questionEl = document.getElementById("questions");
var questionHeaderEl = document.getElementById("question-title")
var endScreenEl = document.getElementById("end-screen")
var answersEl = document.getElementById("choices");
var UlElement = document.querySelector(".questionsUl");
var timerElement = document.querySelector("#time");
var questionNum = 0;
var timer;
var seconds;
var questions = [question1, question2, question3];




function main()
{ 
    hideElements(startButtonEl);
    showElements(questionEl)
    displayQuestion();
    startTimer();




}


function hideElements(inputEl)
{
    inputEl.setAttribute("class","hide");

}

function showElements(inputEl)
{
    inputEl.setAttribute("class","display");

}

function displayQuestion()
{
    if (questionNum <= questions.length-1)
    {
        questionHeaderEl.textContent = questions[questionNum].question;
        displayOptions();
    }

}

function displayOptions()
{
    var i = 0;
    for (var option of questions[questionNum].answers)
    {
        UlElement.children[i].textContent = option;
        i++;

    }

}

function showNextQuestion()
{
    if (questionNum <= questions.length - 1)
    {
        questionNum +=1;
        displayQuestion();
    }

}


function displayEndScreen(){
    hideElements(questionEl);
    showElements(endScreenEl);
    
}

function startTimer() {
    seconds = 300;
    timer = setInterval(()=>
    {
        timerElement.textContent = seconds;
        seconds--
        if (seconds == 0)
        {
            clearInterval(timer);
            displayEndScreen();

        }
    }, 1000)

    timer;
  };



startButtonEl.addEventListener("click", main);

questionEl.addEventListener("click", (event)=>
{
    event.stopPropagation();
    var element = event.target;
    if (element.matches("li"))
    {
        if (questionNum < question.length - 1)
        {

            if (element.textContent == questions[questionNum].correctAnswer) 
            {
                console.log("correct answer");
            }
            else 
            {
                console.log("bzzt wrongo");
                seconds -= 100;
            }

            showNextQuestion();
        }

        else {
            displayEndScreen();
        }

    }

})


