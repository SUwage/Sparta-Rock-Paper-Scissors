var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.floor(Math.random()*(10-1+1)+1);;
if (computerChoice <3.33){
    computerChoice = "rock";
}else if(computerChoice <=5){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}

console.log(computerChoice);
var userWin  = 0;
var computerWin = 0;

function compare (choice1, choice2)
{
  if ((userWin<=2)&&(computerWin<=2))
  {
    if(choice1===choice2){
        alert("The result is a tie!");
        return choice();
    }
    if(choice1==="rock")
    {
        if(choice2==="scissors")
        {
            userWin +=1;
            return alert("You choose rock && Computer choose scissors: You wins!!!!!");
        }
    }
    if(choice1==="paper")
    {
        if(choice2==="rock")
        {
            userWin +=1;
            return alert("You choose paper && Computer choose rock: You wins!!!!!");
        }

    }
    if(choice1==="scissors")
    {
        if(choice2==="paper")
        {
            userWin +=1;
            return alert("You choose scissors && Computer choose paper: You wins!!!!!");
        }
    }
    if(choice1==="scissors")
    {
        if(choice2==="rock")
        {
            computerWin +=1;
            return alert("You choose scissors && Computer choose rock : You lose :(");
        }
    }
    if(choice1==="rock")
    {
        if(choice2==="paper")
        {
            computerWin +=1;
            return alert("You choose rock && Computer choose paper : You lose :(");
        }
    }
    if(choice1==="paper")
    {
        if(choice2==="scissors")
        {
            computerWin +=1;
            return alert("You choose paper && Computer choose scissors : You lose :(");
        }
    }
  }
  compare();
  }


compare (userChoice, computerChoice);
console.log("You've won "+userWin+" games");
console.log("The computer has won "+computerWin+" games");
