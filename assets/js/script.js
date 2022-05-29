var questionPage = document.querySelector("#question-page");
var highScoreBtn = document.querySelector("#high-scores-btn")
var taskIdCounter = 0;

//var firstAnswer = //what user first answer was 


// when page loads: "Coding Quiz Challenge h1", 
//"p text underneth", 
//"start Quiz button";
// the counter in top right corner
// view high score link in top left corner
var newPage = document.createElement("main")
    newPage.className = "page-content";
    newPage.id = "page-content";
    document.body.appendChild(newPage);
    var pageContentEl = document.querySelector("#page-content");
    console.log(pageContentEl);

var createWelcomePage = function (){ 
    var welcomeContent = document.createElement("div");
    newPage.appendChild(welcomeContent);
    welcomeContent.className = "welcome-page";
    welcomeContent.id = "welcome-page";
    var welcomePageTitle = welcomeContent.innerHTML ='<h1 id="title-question" class = "title-question">Coding Quiz Challenge</h1>'
    + '<p id="content-text" class = "content-text">Try to answer the following code-related questions within the time limit.' 
    + 'Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>'
    + '<div id="buttons" class = "buttons"><button id="start-btn" class = "start-btn">Start Quiz</button></div>';
  
};
createWelcomePage();

//when click "start" quiz begins
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
       
    // list 4 buttons - assign id's to each button
    // :hover applied to all buttons to turn color - also removes returned answer

    var createAnswerList = function(){
        var answerList = document.createElement("ol"); // why is this not listing with numbers?
        answerList.className = "answer-list";
        answerList.id = "answer-list-one";
        questionPage.appendChild(answerList);
        
        var answerBtnOne = answerBtnOne = document.createElement("ListItemButton");
            answerBtnOne.className="btn-answer";
            answerBtnOne.innerHTML = "1false";
            answerBtnOne.setAttribute("answer-one-id", taskIdCounter);
            taskIdCounter++;
            answerList.appendChild(answerBtnOne);
            console.log(answerBtnOne);
        
        var answerBtnTwo = document.createElement("ListItemButton");
        answerBtnTwo.className="btn-answer";
        answerBtnTwo.innerHTML = "2false";
        answerBtnTwo.setAttribute("answer-one-id", taskIdCounter);
            taskIdCounter++;
        answerList.appendChild(answerBtnTwo);
        console.log(answerBtnTwo);
      
        var answerBtnThree = document.createElement("ListItemButton");
        answerBtnThree.className="btn-answer";
        
        answerBtnThree.innerHTML = "3Correct";
        answerBtnThree.setAttribute("answer-one-id", taskIdCounter);
        taskIdCounter++;
        answerList.appendChild(answerBtnThree);
        console.log(answerBtnThree);

        var answerBtnFour = document.createElement("ListItemButton");
        answerBtnFour.className="btn-answer";
        answerBtnFour.innerHTML = "4false";
        answerBtnFour.setAttribute("answer-one-id", taskIdCounter);
        taskIdCounter++;
        answerList.appendChild(answerBtnFour);
        console.log(answerBtnFour);       
        answerList.addEventListener("click", userFirstAnswer);
    };

    createAnswerList();
    
    
};

var userFirstAnswer = function eventHandeler() {
    console.log("clicked");
    // if (userFirstAnswer  === 2 ) {
    //     console.log ("ture");
    // }
};

// };

// if statement: 
// clicked false buttonId (3 out of 4)- return "wrong" underneath border
// click correct buttonId - return "correct with points"
// correct answers assign integer to buttonId

// when click button:
// present next question
// var questionPage2 = function () {
//     function clearcontent(elementID) {
//         document.getElementById(elementID).innerHTML = "";
//     }
//     startBtn = clearcontent('page-content');

    
//     var questionPage = document.createElement("div");
//         newPage.appendChild(questionPage);
//         questionPage.className = "question-page";
//         questionPage.id = "question-page";

//     var question1 = document.createElement ("h1");
//         question1.className = "title-question";
//         question1.id = "Second-question";
//         question1.innerHTML = "First Question";
//         questionPage.appendChild(question1);

//     // hover over answer list will remove prior answer's return 
//     var createAnswerList = function(){
//         var answerList = document.createElement("ol"); // why is this not listing with numbers?
//         answerList.className = "answer-list";
//         answerList.id = "answer-list-two";
//         questionPage.appendChild(answerList);
        
//         var answerBtnOne = answerBtnOne = document.createElement("ListItemButton");
//             answerBtnOne.className="btn-answer";
//             answerBtnOne.innerHTML = "1false";
//             answerBtnOne.setAttribute("answer-one-id", taskIdCounter);
//             taskIdCounter++;
//             answerList.appendChild(answerBtnOne);
//             console.log(answerBtnOne);
        
//         var answerBtnTwo = document.createElement("ListItemButton");
//         answerBtnTwo.className="btn-answer";
//         answerBtnTwo.innerHTML = "2false";
//         answerBtnTwo.setAttribute("answer-one-id", taskIdCounter);
//             taskIdCounter++;
//         answerList.appendChild(answerBtnTwo);
//         console.log(answerBtnTwo);
      
//         var answerBtnThree = document.createElement("ListItemButton");
//         answerBtnThree.className="btn-answer";
//         answerBtnThree.innerHTML = "3Correct";
//         answerBtnThree.setAttribute("answer-one-id", taskIdCounter);
//         taskIdCounter++;
//         answerList.appendChild(answerBtnThree);
//         console.log(answerBtnThree);

//         var answerBtnFour = document.createElement("ListItemButton");
//         answerBtnFour.className="btn-answer";
//         answerBtnFour.innerHTML = "4false";
//         answerBtnFour.setAttribute("answer-one-id", taskIdCounter);
//         taskIdCounter++;
//         answerList.appendChild(answerBtnFour);
//         console.log(answerBtnFour);      
//     };
// createAnswerList();
// // create top border with returned value in h2 under answer buttons
//     // var returnAnswerOne = document.createElement("div")
//     // answerList.appendChild(returnAnswerOne);
//     // returnAnswerOne.innerHTML = ('<h2 id = "result" class ="result">' + //returned answer</h2>')

// };



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
// userFirstAnswer.addEventListener('click', questionPage2)
// userFirstAnswer.addEventListener('click', //attach score
// )
// highScoreBtn.addEventListener("click", highScoresPage)
