//Start Section 
let start = document.querySelector("#start");

//Information Section
let  Information = document.querySelector("#Information");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

//Quiz Section 
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question Section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Multiple Choices of Questions 
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and next Button
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

//Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let playAgain = document.querySelector("#playAgain");

//Get All 'H4' Form Quiz Section (MCQS)
let choice_que = document.querySelector(".choice_que");


let index = 0;
let timer = 0;
let interval = 0;

//total points
let correct = 0;

//store Answer Value
let UserAns = undefined;

//what happen when 'Start' Button Will Click
start.addEventListener("click" , ()=>{
    start.style.display = "none";
    Information.style.display = "block";
});

//what happen when 'Exit' Button Will Click
exit.addEventListener("click" , ()=>{
    start.style.display = "block";
    Information.style.display = "none";
});


//Creating Timer For Quiz Timer Section

let countDown = ()=>{
    if(timer === 20)
    {
        clearInterval(interval);
        next_question.click();
    }
    else
        {
             timer++;
             time.innerText = timer;
        }
}

//setInterval(countDown,1000);

let loadData = ()=>{
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;

    //timer start
    timer = 0;
}

loadData();

//what happen when 'Continue' Button Will Click
continueBtn.addEventListener("click" , ()=>{
    quiz.style.display = "block";
    Information.style.display = "none";

    interval = setInterval();
    loadData();
});