
// var btnAnswer = document.querySelector("#btn-answer");
var questionPage = document.querySelector("#question-page");
var highScoreBtn = document.querySelector("#high-scores-btn")
var taskIdCounter = 0;


// when page loads: "Coding Quiz Challenge h1", 
//"p text underneth", 
//"start Quiz button";
// the counter in top right corner
// view high score link in top left corner
var newPage = document.createElement("main")
    newPage.className = "page-content";
    newPage.id = "page-content";
    document.body.appendChild(newPage);

var createWelcomePage = function (){ 
    var welcomeContent = document.createElement("div");
    newPage.appendChild(welcomeContent);
    welcomeContent.className = "welcome-page";
    welcomeContent.id = "welcome-page";
    var welcomePageTitle = welcomeContent.innerHTML ='<h1 id="title-question" class = "title-question">Coding Quiz Challenge</h1>'
    + '<p id="content-text" class = "content-text">Try to answer the following code-related questions within the time limit.' 
    + 'Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>'
    + '<div id="buttons" class = "buttons"><button id="start-btn" class = "start-btn">Start Quiz</button></div>';
    console.log(welcomePageTitle);
};
createWelcomePage();

//when click start quiz button
var startBtn = document.getElementById("start-btn");

//coundown starts from 75 seconds

// create object with:questions, list of 4 questions, and result  
var questionPage1 = function () {
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
       
    var answerList = document.createElement("ol"); // why is this not listing with numbers?
        answerList.className = "answer-list";
        answerList.id = "answer-list";
        questionPage.appendChild(answerList);
    
    var answerBtnOne = document.createElement("ListItemButton");
        answerBtnOne.className="btn-answer";
        answerBtnOne.id= //attachAttributeID
        answerBtnOne.innerHTML = "answer1";
        answerList.appendChild(answerBtnOne);
        console.log(answerBtnOne);
        
        var answerBtnTwo = document.createElement("ListItemButton");
        answerBtnTwo.className="btn-answer";
        answerBtnTwo.id= //attachAttributeID
        answerBtnTwo.innerHTML = "answer2";
        answerList.appendChild(answerBtnTwo);
        console.log(answerBtnTwo);
      
        var answerBtnThree = document.createElement("ListItemButton");
        answerBtnThree.className="btn-answer";
        answerBtnThree.id= //attachAttributeID
        answerBtnThree.innerHTML = "answer3";
        answerList.appendChild(answerBtnThree);
        console.log(answerBtnThree);

        var answerBtnFour = document.createElement("ListItemButton");
        answerBtnFour.className="btn-answer";
        answerBtnFour.id= //attachAttributeID
        answerBtnFour.innerHTML = "answer4";
        answerList.appendChild(answerBtnFour);
        console.log(answerBtnFour);
    
};

// list 4 buttons - assign id's to each button
// :hover applied to all buttons to turn color - also removes returned answer

// if statement: 
// clicked false buttonId (3 out of 4)- return "wrong" underneath border
// click correct buttonId - return "correct with points"
// correct answers assign integer to buttonId

// when click button:
// present next question
// create top border with returned value in h2 under answer buttons


// "All Done!" - h1
//"Your final score is __."
// add assigned integers from correct answers and display
//"Enter your initials:" form input with place holder text "initials" "Submit" bottom
// return initals in CAPS
// top border with returned value in h2 under form input
//when hover over button - return value dissapears

//"High Scores" -h1
// does not show header
// list high scores with 1. 2. 3. 
// display form input with "initals - score"
// buttons: "Go back" "Clear high score"
// go back returns to welcome page
// clear high score- clears high scores.

startBtn.addEventListener("click", questionPage1);
// highScoreBtn.addEventListener("click", highScoresPage);