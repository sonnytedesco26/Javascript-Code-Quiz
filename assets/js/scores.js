/////// HIGHSCORE SECTION

var highScores = document.getElementById('HighScoreList');
var addScore = JSON.parse(localStorage.getItem("scoreAdded"));
//realized that if you just set it to an empty array, saveScore function working with scoreArray would screw up
var scoreArray = JSON.parse(localStorage.getItem("scoreArray")) || [];
//if score is added, call saveScore function and list the high scores. Once high score is in the array (saveScore function), remove it from the scoreAdded
if(addScore){
    saveScore(addScore);
    listScores();
    localStorage.removeItem("scoreAdded")
} else{
    //always gotta list the scores
    listScores();
}


function clearHighScores(){
    //clears everything if the clear button is pressed
        localStorage.clear();
        highScores.textContent = "";
        scoreArray = [];
    }

function saveScore(entry){
    scoreArray.push(entry);
    //sorts the scores on the screen by using the sort function (returns the greater score higher first and then the lesser, etc. )
    scoreArray.sort(function (a,b) {return b.addedScore - a.addedScore});
    //putting the new score into the array to list
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
}

function listScores(){
    //for each score in the array, list it
    for (i=0;i<scoreArray.length;i++){
        //each score gets an li element, which then has its contents appended with the textNode created. Using string interpolation, lists the scores in each li taking name and addedScore from scoreArray objects
        var newScore = document.createElement("li");
        newScore.appendChild(document.createTextNode(`${scoreArray[i].name} scored ${scoreArray[i].addedScore}`));
        //displays the newly added score on the page
        highScores.appendChild(newScore);
    }
}

function takeHome(){
    location.replace("index.html");
}