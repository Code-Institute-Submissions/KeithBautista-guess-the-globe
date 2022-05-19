const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionImageElement = document.getElementById('question-image')
var progressBarValue = 0;
let playerName = ""


let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click' , () => {
    currentQuestionIndex++ // Adding 1 to the currentQuestionIndex
    setNextQuestion() //Calling the setNextQuestion to get next question
})

function startGame(){
    console.log('The Game has Begun')
    startButton.classList.add('hide')// Here we are hiding the startGame Button for the moment
    shuffledQuestions = questions.sort(() => Math.random() - .5)//Less than or more than 0 which will shuffle our questions for us
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')//Question Container has hide class, we now remove it to show questions
    setNextQuestion()// Here we set the next question for the user
    document.getElementById('progressBar').style.width = (0 + '%')

}


function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}

function increaseProgressBar (){
    progressBarValue += 10;
    document.getElementById('progressBar').style.width = (progressBarValue + '%')
    console.log(progressBarValue)
}

function showQuestion(question){
    questionElement.innerHTML = question.question // Changes Question Text
    questionImageElement.innerHTML = question.image // Changes Question Image
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text // Changes Question Answer
        button.classList.add('btn') // Change the classlist of button to btn
        if (answer.correct) { 
            button.dataset.correct = answer.correct // Only set to true
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body) // To reset the color of background inbetween questions
    nextButton.classList.add('hide') // Hiding the next button while within the questions
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target //Button pressed or selected
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct) // Check if set to correct or wrong
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) { 
        /*If the shuffled questions amount is greater than current question amount then show next button 
        else change text to restart and remove the hide button*/
        nextButton.classList.remove('hide') //We are removing the classlist hide to show nextButton
    } else {
        startButton.innerHTML = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    /*If correct we want to add correct class else add wrong class*/
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

 function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/dominica.png'>",
        answers: [
            {text: 'Ireland', correct: true},
            {text: 'Ivory Coast', correct: false},
            {text: 'Finland', correct: false},
            {text: 'Greece', correct: false},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/dominica.png'>",
        answers: [
            {text: 'hrteshtrs', correct: true},
            {text: 'htrshtrsht', correct: false},
            {text: 'htrhtrdht', correct: false},
            {text: 'htrdhtrdhrtd', correct: false},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/dominica.png'>",
        answers: [
            {text: 'htrdhtrdhrtd', correct: true},
            {text: 'j65jytdty jytdytd', correct: false},
            {text: 'jyjtdyjtdftyj', correct: false},
            {text: 'ytfjr6j', correct: false},
            
        ]
    },
    {
        question: 'What Country is this?',
        image: "<img src='assets/images/dominica.png'>",
        answers: [
            {text: 'jytdmy', correct: true},
            {text: 'mytdmyt ytdfmytdfm', correct: false},
            {text: 'mytfmytf', correct: false},
            {text: 'ytfmytfmty', correct: false},
            
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

/*Start of username Modal*/

//Grab the Modal
var usernameModal = document.getElementById('openUsernameModal');

//Get the <span> element that closes the modal
var closeUsernameModal = document.getElementsByClassName('closeUsernameModal')[0];

//When the user clicks on the button, open the username Modal
onload = function(){
    usernameModal.style.display = "block";
}


function captureName() {
    //get the start username button
    let startUsernameButton = document.getElementById('start-username-button');
    startUsernameButton.addEventListener('click', captureUsername);
    function captureUsername(e) {
        e.preventDefault()
        let username = document.getElementById('name');
        if (username.value == ('')) {
        playerName = 'Player 1';
        console.log(playerName)
        usernameModal.style.display = "none";
        startGame()
        } else {
            playerName = username.value;
            console.log(playerName)
            usernameModal.style.display = "none";
            startGame()
        }
    }
}
/*End of username Modal*/

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