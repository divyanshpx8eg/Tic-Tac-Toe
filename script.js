result=document.querySelector(".result");
board=document.querySelector(".Board");
btns=document.querySelectorAll(".bt");
newGame=document.querySelector(".newgame");

let turn=1;
let count=0;

let winPattern=
[
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[0,3,6],
[1,4,7],
[2,5,8]]

checkWinner=()=>{
    for(let pattern of winPattern){
        let pos0=btns[pattern[0]].innerText;
        let pos1=btns[pattern[1]].innerText;
        let pos2=btns[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos0!=""){
            if(pos1===pos2 && pos0===pos2){
                console.log("winner");
                return 1;
            
            }
        }
    }
    return 0;
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        
        if(turn){
            btn.style.backgroundImage="url('images/Tick.png')";
            turn=0;
            btn.innerText="O";
        }
        else{
            btn.style.backgroundImage="url('images/Cross.png')";
            turn=1;
            btn.innerText="X";
        }
        btn.disabled=true;
        btn.style.backgroundSize="cover";
        if(checkWinner()){
            
            board.style.display="none";
            result.innerText=`Player ${btn.innerText} wins!`;
            setTimeout(() => {
                location.reload();
            }, 3000);
        }
        count+=1;
        if(count===9){
            board.style.display="none";
            result.innerText=`Draw`;
            setTimeout(() => {
                location.reload();
            }, 3000);
        }
    })
    

})

newGame.addEventListener("click", ()=>{
    setTimeout(() => {
        location.reload();
    }, 50);
    
})



