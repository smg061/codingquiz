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
var score;
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


function displayEndScreen()
{
    if (seconds>0)
    {
        score = seconds;
    }
    document.getElementById("final-score").textContent = score;
    hideElements(questionEl);
    showElements(endScreenEl);
    seconds = 1;
 
}

function startTimer() {
    seconds = 300;
    timer = setInterval(()=>
    {       
         seconds--
        timerElement.textContent = seconds;
        if (seconds <= 0)
        {
            clearInterval(timer);
            displayEndScreen();
        }
    }, 1000)

    
  };

function handleFormSubmit(event) {
    event.preventDefault();
    var nameInput = document.querySelector("#initials").value;
    var scoreInput = score;
    var scoreToStore = 
    {
        initials: nameInput,
        score: score
    }
    if (scores === null)
    {
        scores = [];
    }
    scores.push(scoreToStore);
    storeScores();    

  };


  function storeScores()
  {
    localStorage.setItem("scores", JSON.stringify(scores));

  }

  function loadScores()
  {
      var loadedScores = JSON.parse(localStorage.getItem("scores"));
      if (loadScores !== null) 
      {
          scores = loadedScores;
      }
      

  }


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
                seconds -= 10;
            }

            showNextQuestion();
        }

        else 
        {
            displayEndScreen();

        }


    }

})

document.querySelector("#submit").addEventListener("click", handleFormSubmit)

loadScores();