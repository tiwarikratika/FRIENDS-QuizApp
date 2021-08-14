const readlineSync = require('readline-sync');

var chalk = require('chalk');


console.log(chalk.cyanBright("Welcome to my F.R.I.E.N.D.S QUIZ!"));
var userName = readlineSync.question(chalk.cyanBright("May I please know your name ? "))
console.log(chalk.cyanBright("Let's get started ",userName));

console.log(chalk.yellow("\nRules are : Choose the correct option from the 4 options provided for every question\n You wil get 1 point for correct answer and \n -1 for wrong answer\n"));


var questions =[
  {
    question: "How many seasons of Friends are there?",
    options:["8","4","6","10"],
    answer: "10"
  },
  {
    question: "How many times did Ross get divorced?",
    options:[ "1", "2", "3", "0"],
    answer: "3"
  },
   {
    question: "Who was the maid of honor at Monica’s wedding?",
    options:["Rachel","Phoebe","Janice","Charlie"],
    answer: "Rachel"
  },
  {
    question: "What is Chandler Bing’s middle name? ",
    options:["Muriel","Bing","Tribbiani","Geller"],
    answer: "Muriel"
  },
  {
    question: "Who mistakingly threw a woman’s wooden leg into a fire?",
    options:["Chandler","Ben","Joey","Ross"],
    answer: "Joey"
  },
  {
    question: "What was the name of Ross’ pet monkey?",
    options:["Arcel","Mikel","Marcel","cacy"],
    answer: "Marcel"
  },
  {
    question: "What is the name of Joey’s stuffed penguin?",
    options:["Ducksey","Hugsy","SpaceCowboy","Estele"],
    answer: "Hugsy"
  },
  {
    question: "How many pages was Rachel’s letter to Ross?",
    options:["18(front & back)","16(front & back)","20(front & back)","22(front & back)"],
    answer: "18(front & back)"
  },
  
  {
    question: "What year did Friends first premiere?",
    options:[ "1996","1993","1994","1997",],
    answer: "199"

  }

]
var high_score = {
  name: "Kratika",
  points:"4"
}
var score=0;
function play(question,options,answer){
  var index = readlineSync.keyInSelect(options,question)
  var userAnswer = options[index]
  if(userAnswer===answer)
  {
    score=score+1
    console.log(chalk.green("Yes You are right !!"))

  }
  else{
    score=score-1
    console.log(chalk.red("That's incorrect!!"))
  }
}

for(var i=0;i<questions.length;i++){
  var currentquestion = questions[i]
  play(currentquestion.question,currentquestion.options,currentquestion.answer)
}
if(score<high_score.points){
  console.log(chalk.green("Your Total Score is :",score,"which is less than the highest score: ",high_score.points +"\n Better luck nect time"))
}
else{
  console.log(chalk.green("Your score is", score +"Congratulations! \nYou are the highest Scorer!"))
}