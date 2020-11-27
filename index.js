var readlineSync= require("readline-sync");
const chalk= require("chalk");

var score =0;
var userWelcome= readlineSync.question(chalk.red.bold("What's your name? "));
console.log("Welcome " +chalk.bgMagenta(userWelcome));

function quiz(question,answer){
  var userAnswer= readlineSync.question(chalk.red(question));
  if(userAnswer.toUpperCase()=== answer.toUpperCase()){
    console.log(chalk.green("You r doing great!"));
    score++;
  }else{
    console.log(chalk.green("Sorry! Better luck next time."));
  }
}

var quizQues=[{
  question:"Have you heard about the cartoon Doraemon? ",
  answer:"yes"
},
{
  question:"What is Doraemon?\n 1.Cat\n 2.Robot\n 3.Dog\n",
  answer:"Robot"
},
{
  question:"With whom he used to live? ",
  answer:"Nobita"
},
{
  question:"Doraemon was afraid of? ",
  answer:"Mouse"
},
{
  question:"Doraemon's sister name? ",
  answer:"Doraemi"
},
{
  question:"Which gadget he used to go to places? ",
  answer:"Anywhere door"
},
{
  question:"Which gadget he used to make themselves smaller? ",
  answer:"Flashlight"
},
{
  question:"What is the color of Doraemon? ",
  answer:"Blue"
},
{
  question:"What does Doraemon love to eat? ",
  answer:"Dora cakes"
},
{
  question:"Where does Doraemon keeps his gadget?\n1.His bag\n2.His pocket\n3.His cap\n",
  answer:"His pocket"
}
]

var highscorers=[{
  name:"Nancy",
  score:10
},
{
  name:"Dori",
  score:9
},
{
  name:"You know",
  score:7
}
]

for(var i=0;i<quizQues.length;i++){
  quiz(quizQues[i].question,quizQues[i].answer);
}

console.log("Score is "+score);
var userReply= readlineSync.question("Do you want to check highscorers? ");

if(userReply === "yes"){
  for(var j=0;j<highscorers.length;j++){
  console.log(highscorers[j].name,highscorers[j].score);
  }
}else{
  console.log("thank you for taking up the quiz");
}

function checkHighScore(){
  var userRespond= readlineSync.question("Do you think you can be among high scorers? ");
  
  if(userRespond === "yes" ){
      for(j=0; j<highscorers.length; j++){
        if(score === highscorers[j].score){
          console.log(chalk.green.bgYellow("Congratulate! you beat the high score"));
          console.log(chalk.yellow.bgWhite("Your name is "+chalk.green.bgCyan(userWelcome) +" and your score is "+score));
          console.log("Please give screenshot of your scores");
          console.log("Thank you! for taking up the quiz");
          process.exit(); 
        }else{
          console.log(chalk.gray("Sorry! you couldn't beat the high score"));          
          process.exit();
        }
      }
  } 
}

checkHighScore();
console.log("Thank you! For taking up the quiz");