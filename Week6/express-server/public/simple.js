//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let url = "https://opentdb.com/api.php?amount=AMOUNT&category=CATEGORY&difficulty=DIFFICULTY&type=multiple";
function Get(url){
    let request = new XMLHttpRequest();
    request.open("GET", url,false);
    request.send(null);
    return request.responseText;
}
let questionTemplate = `  
<div class="questionContainer">
<p class="question">QUESTION</p>
ANSWER1
ANSWER2
ANSWER3
ANSWER4
</div>`
let correctTemplate = "<p class='answer' data-correct='true'>ANSWER</p>"
let incorrectTemplate = "<p class='answer'>ANSWER</p>"

function generateQuestions(url){
    let a = JSON.parse(Get(url))
    let questions = a.results
    //console.log(url)
    for(let i=0;i<questions.length;i++){
    
        let temp = questionTemplate.replace("QUESTION", questions[i].question)
        let answerArr = [];
        answerArr.push(correctTemplate.replace("ANSWER",questions[i].correct_answer))
        answerArr.push(incorrectTemplate.replace("ANSWER",questions[i].incorrect_answers[0]))
        answerArr.push(incorrectTemplate.replace("ANSWER",questions[i].incorrect_answers[1]))
        answerArr.push(incorrectTemplate.replace("ANSWER",questions[i].incorrect_answers[2]))
        
        for(let x=0;x<4;x++){
            let rndNum = Math.floor(Math.random() * answerArr.length)
            temp = temp.replace("ANSWER" + String(x+1), answerArr[rndNum])
            //console.log(temp)
            answerArr.splice(rndNum, 1);
        }
    
    
        document.getElementById("container").innerHTML += temp;
    
        // console.log(`question${i}: ` + questions[i].question)
        // console.log("answers: " + questions[i].correct_answer + ", " + questions[i].incorrect_answers.join(", "))
    }
}



//generate button event
document.getElementById("generateButton").addEventListener('click', function(){
    let number = document.getElementById('number').value;
    let difficulty = document.getElementById('difficulty')
    difficulty = difficulty.options[difficulty.selectedIndex].value
    let category = document.getElementById("category")
    category = category.options[category.selectedIndex].value
    
    document.getElementById("generator").style.display = "none";

    newUrl = url.replace("AMOUNT", number);
    newUrl = newUrl.replace("DIFFICULTY", difficulty.toLowerCase())
    newUrl = newUrl.replace("CATEGORY", category)

    generateQuestions(newUrl);
})



//click event for the document then check that its on the right element
document.addEventListener('click',function(e){
    if(e.target && e.target.className == 'answer' && !(e.target.dataset.picked)){
          if(e.target.dataset.correct ){
            //correct answer
            e.target.style.backgroundColor = "green";
          }else{
              //wrong answer
              e.target.style.backgroundColor = "red";
          }
          //disable clickkng on the answers
          let children = e.target.parentElement.children;
          for(let i=1;i<children.length;i++){
              children[i].dataset.picked = "true";
          }
     }
 });