let userscore=0;
let compscore=0;
 const userscorepara =document.querySelector("#user-score");
 const compscorepara =document.querySelector("#comp-score");
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");


const showwinner=(userwin,userchoice,comchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("YOU WIN");
        msg.innerText=`YOU WIN ${userchoice} beats ${comchoice}` ;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore
        console.log("you lose");
        msg.innerText=`YOU LOSE ${comchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const drawGame = () => {
   
    msg.innerText="GAME IS DRAW.play again";
    msg.style.backgroundColor = "rgb(22, 100, 125)";
}


const playgame=(userchoice) => {
   
    const comchoice=compchoice();
    console.log("comp choice = ", comchoice);

    if(userchoice === comchoice){
        drawGame(); 
    } else{
        let userwin = true;
        if(userchoice === "rock"){
           userwin = comchoice==="paper" ?false: true;

        }
        else if(userchoice === "paper"){
          userwin=  comchoice === "scissors"? false : true;
        }
        else{
            userwin = comchoice==="rock" ? false:true;
        }
        showwinner(userwin, userchoice,comchoice);
    }
};
 const  compchoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx= Math.floor(Math.random()*3);
    return options[randidx];
 }

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
       const userchoice= choice.getAttribute("id");
        
        playgame(userchoice);
    });

});
