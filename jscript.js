//Make a Random Choice For Computer
function computerPlay(){
    const compchoices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()*3);
    let complay = compchoices[num];
    return complay;
}


//Take User Input
function playerPlay(){
    let playerchoice = prompt("Enter your Choice, Either: Rock, Paper or Scissors", '');
    let playerchoicerefined = playerchoice.toLowerCase();
    return playerchoicerefined;
}

let manscore = 0;
let machinescore = 0;


//User vs Computer Algo
function playRound(playerSelection , computerSelection){
    if ((playerSelection === "rock" && computerSelection === "scissors" ) || 
        (playerSelection === "paper" && computerSelection === "rock" ) || 
        (playerSelection === "scissors" && computerSelection === "paper" ))
    {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        alert(`You Win! ${playerSelection} beats ${computerSelection}`);
        manscore++;
        return manscore;

    }
    else if ((computerSelection === "rock" && playerSelection === "scissors" ) || 
            (computerSelection === "paper" && playerSelection === "rock" ) || 
            (computerSelection === "scissors" && playerSelection === "paper" ))
    {
        console.log(`Computer Wins! ${computerSelection} beats ${playerSelection}`);
        alert(`Computer Wins! ${computerSelection} beats ${playerSelection}`);
        machinescore++;
        return machinescore;
    }
    else{
        console.log("This game is a draw");
        alert(`This is a Draw! ${computerSelection} ties with ${playerSelection}`);
    }
}


//Looping the Game 5 Times
function game(){

    for(i=0; i<5; i++){
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }

    //Total Score for Man VS Machine
    if(manscore>machinescore){
        console.log("Humans Won");
        alert(`Humans Won! Human: ${manscore} | Machine: ${machinescore}`);

    }
    else if(machinescore>manscore){
        console.log("Machines Won");
        alert(`Machines Won! Machine: ${machinescore} | Human: ${manscore}`)
    }
    else{
        console.log("Humans and Machine made Peace");
        alert(`Humans and Machine made Peace, they Scored ${machinescore} - ${manscore}`)
    }
    
}
game();



