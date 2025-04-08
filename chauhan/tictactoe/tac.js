let boxes=document.querySelectorAll(".box")
let resetbttn=document.querySelector("#resetbttn");
let newbtn=document.querySelector("#newbttn");
let msgcontainer=document.querySelector(".msg");
let msg = document.querySelector("#msgg");

let turno=true;
let count=0;
  const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () => {
    turno=true;
    enablebox();
    msgcontainer.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click" ,() => {
        console.log("clicked");
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";  
            turno=true;
        }
        box.ariaDisabled=true;
       let iswinner= checkwinner();
       if(count === 9 && !iswinner) {
        gamedraw ();
       }
    });

});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const disablebox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enablebox = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (winner) => {
   
    msg.innerText= `winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};
const checkwinner = () => {
    for (let pattern of winpattern){
       
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!= "" && pos2val!= "" && pos3val!= ""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner (pos1val);
                return true;
            }
        }

    }
};
newbtn.addEventListener("click",resetgame);
resetbttn.addEventListener("click",resetgame);

