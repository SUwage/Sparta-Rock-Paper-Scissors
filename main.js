  var userWin  = 0;
  var computerWin = 0;

  function compare ()
  {
  choice2 = Math.floor(Math.random()*(10-1+1)+1);
  if (choice2 <3)
  {
    choice2 = "rock";
  }
  else if(choice2 <=5)
  {
    choice2 = "paper";
  }
  else
  {
      choice2 = "scissors";
  }

  if (userWin < 3 && computerWin < 3)
  {
    choice1 = prompt("Do you choose rock, paper or scissors?");

    if(choice1===choice2){
        alert("The result is a tie!");
        compare();
    }
    if(choice1==="rock")
    {
        if(choice2==="scissors")
        {
            userWin +=1;
            alert("You choose rock && Computer choose scissors: You wins!!!!!");
            alert("You've won "+userWin+" games. The computer has won "+computerWin+" games");
            compare();
        }
    }
    if(choice1==="paper")
    {
        if(choice2==="rock")
        {
            userWin +=1;
            alert("You choose paper && Computer choose rock: You wins!!!!!");
            alert("You've won "+userWin+" games. The computer has won "+computerWin+" games");
            compare();
        }
    }
    if(choice1==="scissors")
    {
        if(choice2==="paper")
        {
            userWin +=1;
            alert("You choose scissors && Computer choose paper: You wins!!!!!");
            alert("You've won "+userWin+" games. The computer has won "+computerWin+" games");
            compare();
        }
    }
    if(choice1==="scissors")
    {
        if(choice2==="rock")
        {
            computerWin +=1;
            alert("You choose scissors && Computer choose rock : You lose :(");
            alert("You've won "+userWin+" games. The computer has won "+computerWin+" games");
            compare();
        }
    }
    if(choice1==="rock")
    {
        if(choice2==="paper")
        {
            computerWin +=1;
            alert("You choose rock && Computer choose paper : You lose :(");
            alert("You've won "+userWin+" games. The computer has won "+computerWin+" games");
            compare();
        }
    }
    if(choice1==="paper")
    {
        if(choice2==="scissors")
        {
            computerWin +=1;
            alert("You choose paper && Computer choose scissors : You lose :(");
            alert("You've won "+userWin+" games. The computer has won "+computerWin+" games");
            compare();
        }
    }

    if (computerWin >=3) {
      alert("COMPUTER WON! YOU LOSE");
    } else {
      alert("YOU WON!");
    };
  }
}
compare();
