var questionPage = document.querySelector("#question-page");
var highScoreBtn = document.querySelector("#high-scores-btn")
var taskIdCounter = 0;
var userScore = 0;
var userResult = 0;


var headerEl = document.createElement("header");
    headerEl.id = "header-id";
    document.body.appendChild(headerEl); // how to get this above script?

// view high score link in top left corner
var highScoreBtn = document.createElement("button");
    highScoreBtn.className = "high-score-btn";
    highScoreBtn.id = "high-score-btn";
    highScoreBtn.textContent = "View High Scores"
    headerEl.appendChild(highScoreBtn);

// the counter in top right corner
const timerEl = document.createElement("div");
    headerEl.appendChild(timerEl); //add countdown
    timerEl.className = "countdown";
    timerEl.id = "countdown";
    let originalTimer = 75;
    timerEl.textContent = ("Time: " + 0);
    function countdown(time) {
         if(time<=0){
            allDone();
            return;
         } 
        setTimeout(function() {
        timerEl.textContent = ("Time: " + time);
        time--;
        countdown(time);
        }, 1000)
    };
// penalize wrong answers by 10 seconds

var newPage = document.createElement("main")
    newPage.className = "page-content";
    newPage.id = "page-content";
    document.body.appendChild(newPage);
    var pageContentEl = document.querySelector("#page-content");
    console.log(pageContentEl);

// when page loads: "Coding Quiz Challenge h1", 
var createWelcomePage = function (){ 
    var welcomeContent = document.createElement("div");
    newPage.appendChild(welcomeContent);
    welcomeContent.className = "welcome-page";
    welcomeContent.id = "welcome-page";

    //"p text underneth", 
    //"start Quiz button";
    var welcomePageTitle = welcomeContent.innerHTML ='<h1 id="title-question" class = "title-question">Coding Quiz Challenge</h1>'
    + '<p id="content-text" class = "content-text">Try to answer the following code-related questions within the time limit.' 
    + ' Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>'
    + '<div id="buttons" class = "buttons"><button id="start-btn" class = "start-btn">Start Quiz</button></div>';
  
};
createWelcomePage();

//when click "start" quiz begins
var startBtn = document.getElementById("start-btn");


// create object with:questions, list of 4 questions, and result  
var questionPage1 = function () {
    //coundown starts from 75 seconds
    countdown(originalTimer);

    function clearcontent(elementID) {
        document.getElementById(elementID).innerHTML = "";
    }
    startBtn = clearcontent('page-content');
    
    var questionPage = document.createElement("div");
        newPage.appendChild(questionPage);
        questionPage.className = "question-page";
        questionPage.id = "question-page";

    var question1 = document.createElement ("h1");
        question1.className = "title-question";
        question1.id = "first-question";
        question1.innerHTML = "First Question";
        questionPage.appendChild(question1);
       
    // list 4 buttons - assign id's to each button
    // :hover applied to all buttons to turn color - also removes returned answer
    var createAnswerList = function(){
        var answerList = document.createElement("ol"); // why is this not listing with numbers?
            answerList.className = "answer-list";
            answerList.id = "answer-list-one";
            questionPage.appendChild(answerList);
        
        var answerBtnOne = answerBtnOne = document.createElement("ListItemButton");
            answerBtnOne.className="btn-answer";
            answerBtnOne.textContent = "1false";
            answerBtnOne.id = "answer-one";
            answerList.appendChild(answerBtnOne);
        
        var answerBtnTwo = document.createElement("ListItemButton");
            answerBtnTwo.className="btn-answer";
            answerBtnTwo.textContent = "2false";
            answerBtnTwo.id ="answer-two";
            answerList.appendChild(answerBtnTwo);
      
        var answerBtnThree = document.createElement("ListItemButton");
            answerBtnThree.className="btn-answer";
            answerBtnThree.textContent = "3Correct";
            answerBtnThree.id = "q-1-correct";
            answerList.appendChild(answerBtnThree);
        

        var answerBtnFour = document.createElement("ListItemButton");
            answerBtnFour.className="btn-answer";
            answerBtnFour.textContent = "4false";
            answerBtnFour.id="answer-four";
            answerList.appendChild(answerBtnFour);
    
        answerList.addEventListener("click", userFirstAnswer);
    };

    createAnswerList();
};

// if statement: 
// clicked false buttonId (3 out of 4)- return "wrong" underneath border
// click correct buttonId - return "correct with logged points"

var userFirstAnswer = function eventHandeler(event) {
    console.log(event.target);
    if (event.target.matches('#q-1-correct')) {
        console.log ("correct");

        // add value to score
        userFirstAnswer = (userScore + 20);
        console.log(userFirstAnswer);
        userResult = (userResult + 1);
        console.log(userResult);

        // when click button, present next question
        questionPage2();

    } else {
        console.log ("false");
        // decrease value to score
        userFirstAnswer = (userScore - 20);
        console.log(userFirstAnswer);
        userResult = (userResult = null);
        console.log(userResult);
        // when click button, present next question
        questionPage2();
    }
};

var questionPage2 = function () {
    function clearcontent(elementID) {
        document.getElementById(elementID).innerHTML = "";
    }
        startBtn = clearcontent('page-content');
    
    var questionPage = document.createElement("div");
        newPage.appendChild(questionPage);
        questionPage.className = "question-page";
        questionPage.id = "question-page";

    var question1 = document.createElement ("h1");
        question1.className = "title-question";
        question1.id = "Second-question";
        question1.innerHTML = "Second Question";
        questionPage.appendChild(question1);

    var createAnswerList = function(){
        var answerList = document.createElement("ol"); // why is this not listing with numbers?
            answerList.className = "answer-list";
            answerList.id = "answer-list-one";
            questionPage.appendChild(answerList);
        
        var answerBtnOne = answerBtnOne = document.createElement("ListItemButton");
            answerBtnOne.className="btn-answer";
            answerBtnOne.textContent = "1correct";
            answerBtnOne.id = "q-2-correct";
            answerList.appendChild(answerBtnOne);
        
        var answerBtnTwo = document.createElement("ListItemButton");
            answerBtnTwo.className="btn-answer";
            answerBtnTwo.textContent = "2false";
            answerBtnTwo.id ="answer-two";
            answerList.appendChild(answerBtnTwo);
      
        var answerBtnThree = document.createElement("ListItemButton");
            answerBtnThree.className="btn-answer";
            answerBtnThree.textContent = "3fase";
            answerBtnThree.id = "answer-three";
            answerList.appendChild(answerBtnThree);
        

        var answerBtnFour = document.createElement("ListItemButton");
            answerBtnFour.className="btn-answer";
            answerBtnFour.textContent = "4false";
            answerBtnFour.id="answer-four";
            answerList.appendChild(answerBtnFour);

    // create top border with returned value in h2 under answer buttons - not sure why this isn't working
   

        var resultQuestionOne = document.createElement("h2");
            resultQuestionOne.className = "answer-result";
                if (userResult > 0 ) {
                resultQuestionOne.textContent = "Correct!";
                } else {
                    resultQuestionOne.textContent = "Wrong!";
                };
            answerList.appendChild(resultQuestionOne);
           

        answerList.addEventListener("click", userSecondAnswer);  
    };
    createAnswerList();
    //mouse over - result dissapears - did not complete

};

var userSecondAnswer = function eventHandeler(event) {
    console.log(event.target);
    if (event.target.matches('#q-2-correct')) {
        console.log ("correct");
        userSecondAnswer = (userFirstAnswer + (userScore + 20));
        console.log(userSecondAnswer);

        allDone();//fix when add all questions

    } else {
        console.log ("false");
        userSecondAnswer = (userFirstAnswer + (userScore - 20));
        console.log(userSecondAnswer);

        allDone();//fix when add all questions
    }
};

// "All Done!" - h1
var allDone = function () {
    function clearcontent(elementID) {
        document.getElementById(elementID).innerHTML = "";
    }
    startBtn = clearcontent('page-content');
    
    var allDonePage = document.createElement("div");
        newPage.appendChild(allDonePage);
        allDonePage.className = "question-page";
        allDonePage.id = "question-page";

    var allDoneTitle = document.createElement ("h1");
        allDoneTitle.className = "title-question";
        allDoneTitle.textContent = "All done!"
        allDonePage.appendChild(allDoneTitle);
//"Your final score is __."  
    var finalScore = document.createElement ("h2");
        finalScore.className = "final-score-content"
        finalScore.textContent = "Your final score is " + userSecondAnswer + " .";//add final score - fix when more questions are added
        allDonePage.appendChild(finalScore);

//"Enter your initials:" form input with "Submit" bottom
    var enterYourInitials = document.createElement('div');
        enterYourInitials.className= "enter-initials"
        enterYourInitials.innerHTML = '<h2 id="final-score-content">Enter initials:</h2>';
        allDonePage.appendChild(enterYourInitials);

    var formEl = document.createElement('form');
        formEl.className="initials-form";
        formEl.id="initials-form"; 
        enterYourInitials.appendChild(formEl);
        console.log(formEl);

        formEl.innerHTML='<input name="initials-input" class ="initials-input"></input><button class="submit-btn" id ="form-button" type="submit">Submit</button>';
        formEl.addEventListener("submit", highScore);
};

//save initials and score to localStorage
// return initals in CAPS
// top border with returned value in h2 under form input
//when hover over button - return value dissapears
var highScore = function(event){
    event.preventDefault();
 
    var userInitials = document.querySelector("input[name='initials-input']").value.toUpperCase();
        console.log (userInitials);
        localStorage.setItem("high scores", userInitials);

    highScorePage();
};

//"High Scores" -h1
// does not show header
// list high scores with 1. 2. 3. 
// display form input with "initals - score"
var highScorePage = function (){
    function clearcontent(elementID) {
        document.getElementById(elementID).innerHTML = "";
    }
    highScoreBtn = clearcontent('page-content');
    
    var highScoreDiv = document.createElement("div");
        highScoreDiv.className = "question-page";
        highScoreDiv.id = "question-page";
        newPage.appendChild(highScoreDiv);
        console.log(highScoreDiv);

    var highScoreTitle = document.createElement ("h1");
        highScoreTitle.className = "title-question";
        highScoreTitle.textContent = "High scores"
        highScoreDiv.appendChild(highScoreTitle);

    var highScoresContainer = document.createElement("ol");
        highScoresContainer.className = "high-scores-container";
        highScoreDiv.appendChild(highScoresContainer);

    var highScoreListEl = document.createElement('li');
        highScoreListEl.className = "high-score-list-el";
        highScoreListEl.textContent = localStorage.getItem()
    };



// buttons: "Go back" "Clear high score"
// go back returns to welcome page
// clear high score- clears high scores.


startBtn.addEventListener("click", questionPage1);
highScoreBtn.addEventListener("click", highScorePage);
