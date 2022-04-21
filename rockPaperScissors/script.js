let randomComputerGuess;
  const playerSelection = "rock";
  let computerSelection = computerPlay();
  let score=0;
  var new_score;
  
function computerPlay(){
    
    let computerPlay;

  
    if (randomComputerGuess==0){
        
       return "Rock";
    }
    else if (randomComputerGuess==1) {
      return  "Papper" ;
    } 
    else if (randomComputerGuess==2){
        return "Scissors";
    }

}


function playRound(playerSelection, computerSelection) {
  
    //console.log(computerSelection);
    // your code here!
    if (computerSelection==="Rock"){
        //console.log("Draw , Try Again");
       return score;
    }
    else if(computerSelection==="Papper"){
       // console.log("You Win , Try Again");
         score++;
         return score
    }
    else {
        //console.log("You Lose , Try Again");
        if (score>0) score--;
        else score=0;
return score;
  }
}

  function game(){
    
      for(i=0;i<4;i++){
        randomComputerGuess = Math.floor(Math.random()*3);  
        computerSelection=computerPlay();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection)
          new_score+=score;
      }
      console.log( playRound(playerSelection, computerSelection) );
      console.log(new_score);
  }
  
  