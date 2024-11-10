const cell=document.querySelectorAll(".cell");
const statusText=document.querySelector("#statusText");
const restartBtn=document.querySelector("#restartBtn");
const Wincondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8], 
    [0,4,8],
    [2,4,6],
];
let Options = ["","","","","","","","",""];
let currentPlayer="X";
let running=false;

InitializeGame();

function InitializeGame(){
    cell.forEach(cell => cell.addEventListener("click",cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent=`${currentPlayer}'s turn`;
    running=true;
}
function cellClicked(){
    const cellIndex=this.getAttribute("cellIndex");
    if(Options[cellIndex]!="" || !running){
        return;
    }
    updatecell(this,cellIndex);
    checkWinner();
}
function updatecell(cell,index){
    Options[index]=currentPlayer;
    cell.textContent=currentPlayer;
}
function changePlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;
    for (let i = 0; i < Wincondition.length; i++) {
        const condition = Wincondition[i];
        const cellA = Options[condition[0]];
        const cellB = Options[condition[1]];
        const cellC = Options[condition[2]];

        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }
        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    } else if (!Options.includes("")) {
        statusText.textContent = `Draw!`;
        running = false;
    } else {
        changePlayer();
    }
}
function restartGame(){
    Options = ["","","","","","","","",""];
    currentPlayer = "X";
    running = true;
    statusText.textContent = `${currentPlayer}'s turn`;
    cell.forEach(cell => cell.textContent = "");
}
