# Javascript-Code-Quiz
LINK:
https://sonnytedesco26.github.io/Javascript-Code-Quiz/

For this project, the goal was to create a timed quiz and use local storage to keep the high scores/initials left by the user.

## Start Page
![indexPage](/assets/images/indexPage.png)

The index page presents the user with a prompt explaining the rules of the quiz, and how to navigate the site. The user starts with 60 seconds on the timer, gets 10 points for every correct answer, and has their time remaining reduced by 8 for each incorrect answer. The navbar takes the user to the Personal High Scores page and the Start Quiz button takes the user to the quiz page, where the quiz will begin.

## Quiz Page
![quesExample](/assets/images/quesExample.png)

The user is presented with the question, timer actively ticking, and 4 answers to choose from for the question. With each answer clicked, the checkAnswer function is called to see if it adds 10 points or deducts 8 seconds from the timer - regardless, the next question is loaded afterwards. There was originally an issue with loadQuiz function, where upon loading each question, the user was able to click on the empty spaces around the questions and still trigger the checkAnswer function. This was fixed by changing where the eventListener was checking - from the box containing all of the answers, to each answer individually.

![mediaExample](/assets/images/mediaExample.png)

The @media css section helps reformat the answers/navbar to work with any window size.

## Finishing the quiz
![initialEntry](/assets/images/initialEntry.png)

When finishing the quiz, the text that originally displayed the question is replaced with "You scored __" text. Text is generated immediately after that, prompting the user to enter initials to an input box. The Save High Score button is also added right below the original question text, which leaves the Seconds remaining (countdown now stopped by the quizEnd function) at the bottom of the screen. If the user puts nothing into the input box, an alert pops up prompting them to put something in before pressing the Save High Score button.

## Highscore Page
![highScores](/assets/images/highScores.png)

When pressing the save button when the quiz is finished, the user is taken to the highscore page, where their newly saved score will be added to the list of high scores. When opening the page, the IF at the top of the scores.js script checks to see if the save scores button at the end of the quiz was pressed. The localStorage.removeItem in the first IF is there to prevent the latest score from being copied repeatedly if the user reloaded the page. These records, objects containing both inputted initials and their respective scores, are listed here using the listScores function (ran regardless whether or not a new score was added.) Using string interpolation, the objects (initials and scores) are listed below the Highest Scores text at the top of the screen. The clear scores button simply empties the localStorage, the scoreArray, and the highScores text. In the saveScores function, there is sorting logic to list the scores in order based on score value. Below the clear button, is a button to navigate to the home page, where the user can retry from the very start
