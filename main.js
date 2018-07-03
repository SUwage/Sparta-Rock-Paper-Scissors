  var userWin  = 0;
  var computerWin = 0;

  function compare ()
  {
  choice1 = prompt("Do you choose rock, paper or scissors?");

  choice2 = Math.floor(Math.random()*(10-1+1)+1);
  if (choice2 <3.33)
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
  console.log(choice2);

  if ((userWin<=2)&&(computerWin<=2))
  {
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
            console.log("You've won "+userWin+" games");
            console.log("The computer has won "+computerWin+" games");
            return compare();
        }
    }
    if(choice1==="paper")
    {
        if(choice2==="rock")
        {
            userWin +=1;
            alert("You choose paper && Computer choose rock: You wins!!!!!");
            console.log("You've won "+userWin+" games");
            console.log("The computer has won "+computerWin+" games");
            return compare();
        }
    }
    if(choice1==="scissors")
    {
        if(choice2==="paper")
        {
            userWin +=1;
            alert("You choose scissors && Computer choose paper: You wins!!!!!");
            console.log("You've won "+userWin+" games");
            console.log("The computer has won "+computerWin+" games");
            return compare();
        }
    }
    if(choice1==="scissors")
    {
        if(choice2==="rock")
        {
            computerWin +=1;
            alert("You choose scissors && Computer choose rock : You lose :(");
            console.log("You've won "+userWin+" games");
            console.log("The computer has won "+computerWin+" games");
            return compare();
        }
    }
    if(choice1==="rock")
    {
        if(choice2==="paper")
        {
            computerWin +=1;
            alert("You choose rock && Computer choose paper : You lose :(");
            console.log("You've won "+userWin+" games");
            console.log("The computer has won "+computerWin+" games");
            return compare();
        }
    }
    if(choice1==="paper")
    {
        if(choice2==="scissors")
        {
            computerWin +=1;
            alert("You choose paper && Computer choose scissors : You lose :(");
            console.log("You've won "+userWin+" games");
            console.log("The computer has won "+computerWin+" games");
            return compare();
        }
    }
  }
  return;
  }

  compare ();
