
OlEl = document.getElementById("highscores")
clearButton = document.getElementById("clear");
var highScores = JSON.parse(localStorage.getItem("scores"));

// sort the highscores
highScores.sort(function(a, b) {
    return b.score - a.score;
  });

// create an li for each score and append it to the OL element
function showScores() {
    for (let score of highScores)
    {
        let listEl = document.createElement("li");
        listEl.textContent =   score.initials + "   -  " + score.score;
        OlEl.appendChild(listEl);

    }
}

clearButton.addEventListener("click", ()=>{
    highScores = [];
    localStorage.setItem("scores", JSON.stringify(highScores));
    window.location.reload();
}
)

showScores();
