
OlEl = document.getElementById("highscores")
clearButton = document.getElementById("clear");
scores = JSON.parse(localStorage.getItem("scores"));



function showScores() {
    for (let score of scores)
    {

        let listEl = document.createElement("li");
        listEl.textContent =   score.initials + "\t\t\t" + score.score;

        OlEl.appendChild(listEl);


    }
}

clearButton.addEventListener("click", ()=>{
    scores = [];
    localStorage.setItem("scores", JSON.stringify(scores));
    window.location.reload();
    
    

}
)

showScores();