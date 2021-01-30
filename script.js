const quizdb = [
    {
        question: "01.: What is HTML full form?",
        a: "Hey There My Land",
        b: "Hello Text Makeup Language",
        c: "Hello Text Markup Language",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },
    {
        question: "02.: What is CSS full form?",
        a: "Cascading Super Sheets",
        b: "Cascading Style Sheets",
        c: "Core Style Sheet",
        d: "Core Style Sheets",
        ans: "ans2"
    }, {
        question: "03.: What is JS full form?",
        a: "Java Strip",
        b: "Jason Script",
        c: "Java Script",
        d: "Jason Strip",
        ans: "ans3"
    }, {
        question: "04.: What is LIFO full form?",
        a: "Last In Fisrt Out",
        b: "Last In Fisrt Off",
        c: "Last Inner Fisrt Outer",
        d: "Last In Few Out",
        ans: "ans1"
    }, {
        question: "05.: What is FIFO full form?",
        a: "First In Fisrt Out",
        b: "First In Fisrt Off",
        c: "First Inner Fisrt Outer",
        d: "First In Few Out",
        ans: "ans1"
    }, {
        question: "06.: What is HTTP full form?",
        a: "Hyper Text Transport Protocol",
        b: "Hyper Text Transport Prototype",
        c: "Hyper Text Transfer Protocol",
        d: "Hyper Text Transfer Prototype",
        ans: "ans3"
    }, {
        question: "07.: What is RAM full form?",
        a: "Random Access Message",
        b:  "Remote Access Message",
        c:  "Random Access Memory",
        d:  "Remote Access Memory",
        ans: "ans3"
    }, {
        question: "08.: What is AWS full form?",
        a: "Amazon Web Service",
        b: "Amazon Web Server",
        c: "Amazing Web Service",
        d: "Amazon Webwide Service",
        ans: "ans1"
    }, {
        question: "09.:  1GB = ? MB",
        a: "1208 MB",
        b: "1000 MB",
        c: "700 MB",
        d: "1024 MB",
        ans: "ans2"
    }, {
        question: "10.: Full form of MB ?",
        a: "MinBox",
        b: "MyBox",
        c: "MegaByte",
        d: "MegaBit",
        ans: "ans3"
    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    const quetionList =  quizdb[questionCount];

    question.innerHTML = quetionList.question;

    option1.innerHTML = quetionList.a;
    option2.innerHTML = quetionList.b;
    option3.innerHTML = quetionList.c;
    option4.innerHTML = quetionList.d;
}

loadQuestion(); //loading question


getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem)=>{
         if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll =() =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false )     
};
submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizdb[questionCount].ans){
        score++;
    };
    questionCount++;
    
    deselectAll();

    if(questionCount < quizdb.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
           <h3>Your Score ${score}/${quizdb.length} </h3>
           <button class ="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');

    }



});