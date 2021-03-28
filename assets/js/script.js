// select all necessary HTML 
var startButtonEl = document.getElementById("start")
var questionEl = document.getElementById("questions");
var questionHeaderEl = document.getElementById("question-title")
var startScreenEL = document.getElementById("start-screen")
var endScreenEl = document.getElementById("end-screen")
var answersEl = document.getElementById("choices");
var UlElement = document.querySelector(".questionsUl");
var questionFeedback = document.createElement("p");
questionFeedback.setAttribute("class", "question-feedback");
answersEl.appendChild(questionFeedback)
var timerElement = document.querySelector("#time");
// initialize global variables
var questionNum = 0;
var timer;
var seconds;
var score;
var questions = [question1, question2, question3, question4, question5];

// function that starts when the quiz starts
function main()
{ 

    hideElements(startButtonEl);
    hideElements(startScreenEL);
    showElements(questionEl)
    displayQuestion();
    startTimer();
}


// set any element class to hide -> element is hidden
function hideElements(inputEl)
{
    inputEl.setAttribute("class","hide");

}

// make any hidden element visible 
function showElements(inputEl)
{
    inputEl.setAttribute("class","display");

}


// displays a question and its options from a question array
function displayQuestion()
{
    if (questionNum <= questions.length-1)
    {
        questionHeaderEl.textContent = questions[questionNum].question;
        displayOptions();
    }

}

// dynamically displays each option for a question
function displayOptions()
{
    var i = 0;
    for (var option of questions[questionNum].answers)
    {
        UlElement.children[i].textContent = option;
        i++;
    }

}

// increments questionNum by 1 and renders the next question
function showNextQuestion()
{
    // display next questions as long as the question index is valid
    if (questionNum < questions.length - 1)
    {
        questionNum +=1;
        displayQuestion();
    }
    // else display endscreen
    else 
    {
        displayEndScreen();
    }

}


function displayEndScreen()
{
    // this implementation has a quirk where  displayEndScreen()
    // executes twice and sets the score to 0 if I don't add this line
    if (seconds > 0)
    {
        score = seconds;
    }
    // display final score
    document.getElementById("final-score").textContent = score;
    // hide and show pertinent elements
    hideElements(questionEl);
    showElements(endScreenEl);
    // reset time
    seconds = 1;
 
}

function startTimer() {
    // set the time
    seconds = 70;
    timer = setInterval(()=>
    {       
        seconds--
        timerElement.textContent = seconds;
        // clear interval and display endscreen
        if (seconds <= 0)
        {
            clearInterval(timer);
            displayEndScreen();
        }
    }, 1000)

    
  };
  // this function handles the event listener for the question choices
  function handleChoices(event)
  {
      var element = event.target;
      // target li elements i.e. the choices
      if (element.matches("li"))
      {
          if (questionNum <= questions.length - 1)
          {
              // if the clicked element's text content == the correct answer
  
              if (element.textContent == questions[questionNum].correctAnswer) 
              {
                  questionFeedback.textContent ="Correct!";
                  questionFeedback.setAttribute("style", "color: green")
              }
              // else the answer is incorrect; subtract 10 seconds
              else 
              {
                  questionFeedback.textContent = "Incorrect!";
                  questionFeedback.setAttribute("style", "color: red")
                  seconds -= 10;
              }
              showNextQuestion();
          }
      }
  }

function handleFormSubmit(event) {
    event.preventDefault();
    // get the user's initials
    if (document.querySelector("#initials").value != "") 
    {
        var nameInput = document.querySelector("#initials").value;
        // get the user's score
        var scoreInput = score;
        // store score and initials in an object
        var scoreToStore = 
        {
            initials: nameInput,
            score: score
        }
        // for some reason, the first time the code runs, 
        // scores returns null despite being defined at the start of the program
        // this line solves that problem
        if (scores === null)
        {
            scores = [];
        }
        // push the scores object into the scores array
        scores.push(scoreToStore);
        // store to local storage
        storeScores();
        // redirect to highscores page
        location.href = "highscores.html";
    }   
    else 
    {
        alert("Please enter your initials");
    } 

  };
// stores the current sessions's scores to local storage
  function storeScores()
  {
    localStorage.setItem("scores", JSON.stringify(scores));
  }
// loads the locally stored scores into the scores array
  function loadScores()
  {
      var loadedScores = JSON.parse(localStorage.getItem("scores"));
      if (loadScores !== null) 
      {
          scores = loadedScores;
      }
      
  }

startButtonEl.addEventListener("click", main);
questionEl.addEventListener("click", handleChoices)
document.querySelector("#submit").addEventListener("click", handleFormSubmit)
loadScores();