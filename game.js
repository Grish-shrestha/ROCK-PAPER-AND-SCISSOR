let userScore=0;
let compScore=0;

const container = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const score_user = document.querySelector("#user-score");
const score_comp = document.querySelector("#comp-score");

const gencompChoice=()=>{
    const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
};
const draw=()=>{
    console.log("The Game Was Draw");
    msg.innerText=`_Draw_ because${userChoice} = ${compChoice}`;
    msg.style.backgroundColor="black"; 
}
const showWinner= (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        score_user.innerText= userScore;
        console.log("You Win!!");
        msg.innerText=`You Win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
}else{
    compScore++;
    score_comp.innerText=compScore;
    console.log("You Loose");
    msg.innerText=`You Loose!! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
}
}

const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    //Generate Computer Choice. 
    const compChoice = gencompChoice();
    console.log("comp choice=",compChoice);
    //IF Game Is Draw.
    if(userChoice===compChoice){
        draw();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin = compChoice=== "paper" ? false : true; 
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin = compChoice==="scissors"? false : true;
        }else if(userChoice ==="scissors"){
            //rock,paper
            userWin = compChoice==="rock"?false : true;

        }
        showWinner(userWin, userChoice, compChoice);
    }
};

container.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
});