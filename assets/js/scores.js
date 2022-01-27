/////// HIGHSCORE SECTION

var highScores = document.getElementById('HighScoreList');
var clear = document.getElementById("clear");
var addScore = JSON.parse(localStorage.getItem("scoreAdded"));
var scoreArray = JSON.parse(localStorage.getItem("scoreArray")) || [];

if(addScore){
    saveScore(addScore);
    listScores();
    localStorage.removeItem("scoreAdded")
} else{
    listScores();
}


function clearHighScores(){
        localStorage.clear();
        highScores.textContent = "";
        scoreArray = [];
    }

function saveScore(entry){
    scoreArray.push(entry);
    scoreArray.sort(function (a,b) {return b.addedScore - a.addedScore});
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
}

function listScores(){
    for (i=0;i<scoreArray.length;i++){
        var newScore = document.createElement("li");
        newScore.appendChild(document.createTextNode(`${scoreArray[i].name} scored ${scoreArray[i].addedScore}`));
        highScores.appendChild(newScore);
    }
}