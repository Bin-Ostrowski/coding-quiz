console.log('test');


// var btnAnswer = document.querySelector("#btn-answer");
var questionPage = document.querySelector("#question-page");
// var taskIdCounter = 0;


// when page loads: "Coding Quiz Challenge h1", 
//"p text underneth", 
//"start Quiz button";
// the counter in top right corner
// view high score link in top left corner
var createWelcomePage = function (){ 
    var newPage = document.createElement("main")
    newPage.className = "page-content";
    newPage.id = "page-content";
    document.body.appendChild(newPage);
    
    var welcomeContent = document.createElement("div");
    newPage.appendChild(welcomeContent);
    welcomeContent.className = "welcome-page";
    welcomeContent.id = "welcome-page";
    var welcomePageTitle = welcomeContent.innerHTML ='<h1 id="title-question" class = "title-question">Coding Quiz Challenge</h1><p id="content-text" class = "content-text">Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p><div id="buttons" class = "buttons"><button id="start-btn" class = "start-btn">Start Quiz</button></div>';
    welcomeContent.appendChile(welcomePageTitle);
   
  
    console.log(newPage, welcomeContent);
   
}
createWelcomePage();

var startBtn = document.getElementById("start-btn");
    console.log(startBtn);
    startBtn.addEventListener("click", questionPage);
    

var questionPage = function () {
    // createWelcomePage.replaceWith(questionPage); //how do i get a new screen 
    // var newPage = document.createElement("main")
    // newPage.className = "page-content";
    // newPage.id = "page-content";
    // document.body.appendChild(newPage);

    // var questions = document.createElement("div");
    // newPage.appendChild(questions);
    // questions.className = "question-page";
    // questions.id = "question-page";
    // var questionTitle = welcomeContent.innerHTML ='<h1 id="title-question" class = "title-question">first question</h1>';

   
  
    console.log(questions);
    document.body.appendChild(questions);
    
};


//when click start quiz button


//coundown starts from 75 seconds

// create object with:questions, list of 4 questions, and result  


// list 4 buttons
// :hover applied to all buttons to turn color - also removes returned answer
// correct answers assign integer 


// when click button:
// present next question
// create top border with returned value in h2 under answer buttons
// if statement: 
// clicked false button (3 out of 4)- return "wrong" underneath border
// click correct - return "correct"

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

