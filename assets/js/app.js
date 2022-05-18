const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionImageElement = document.getElementById('question-image')


let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)

function startGame(){
    console.log('The Game has Begun')
    startButton.classList.add('hide')// Here we are hiding the startGame Button for the moment
    shuffledQuestions = questions.sort(() => Math.random() - .5)//Less than or more than 0 which will shuffle our questions for us
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')//Question Container has hide class, we now remove it to show questions
    setNextQuestion()// Here we set the next question for the user
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerHTML = question.question
    questionImageElement.innerHTML = question.image
}

const questions = [
    {
        question: 'What Country is this?',
        image: 'Ireland',
        answers: [
            {text: 'Ireland', correct: true},
            {text: 'Ivory Coast', correct: false},
            {text: 'Finland', correct: false},
            {text: 'Greece', correct: false},
            
        ]
    }
]





/*Start of Show and Hide Sections found in StackOverFlow = https://stackoverflow.com/questions/8211128/multiple-distinct-pages-in-one-html-file*/
function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}

/*Start of Rules Modal*/

//Grab the Modal
var rulesModal = document.getElementById('openRulesModal');

//Grab the button that opens the modal - This is in the navBar
var rulesModalBtn = document.getElementById('openRules');

//Get the <span> element that closes the modal
var closeRulesModal = document.getElementsByClassName('closeRulesModal')[0];

//When the user clicks on the button, open the Rules Modal
rulesModalBtn.onclick = function(){
    rulesModal.style.display = "block";
}

//When the user clicks on <span> (x), then close the rulesModal
closeRulesModal.onclick = function() {
    rulesModal.style.display = "none";
}

//When the user clicks anywhere outside the rulesModal, then close it
window.onclick = function(event) {
    if (event.target == rulesModal) {
    rulesModal.style.display = "none";
    }
}

/*End of Rules Modal*/

/* This is where you place in your name at the very beginning

function usernameProvide(){
    document.getElementById("game-container").innerHTML = 
    `
    <div class="username-menu">
    <form action ="#">
        <div class="form">
        <span id="usernameBackButton" tabindex="0">&times;</span>
        <span id="usernameError"></span>
        <label for="name">Enter player name:</label>
        <input type="text" id="username" name="username">
        </div>
        <button type="submit" id="beginBtn">Begin Quiz</button>
    </form>
    </div>
    `;
}

*/