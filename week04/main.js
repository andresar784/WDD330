//to chain the h2 with the info displayed
const statusDisplay = document.querySelector('.game--status');
//game active, lets to know if the game is active or not
let gameActive = true;
//to hold the current player, not constant
let currentPlayer= "X";
//the actual state of the game. 
let gameState = ["", "", "", "", "", "", "", "", ""];

//mesages to be displayed. 
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw`;
const curretnPlayerTurn = () => `It is ${currentPlayer} turn`; 


//inicial message, calls the currentPlayerTurn
statusDisplay.innerHTML = curretnPlayerTurn();

//how to compare the results. this is an array with the correct
//lines.
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//function to handle the cell played or clicked
function handleCellPlayed(clickedCell, clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer; 
}
//function to handle the current player, X or O
function handlePlayerChange(){
    currentPlayer = currentPlayer === "X"? "O" : "X";
    statusDisplay.innerHTML = curretnPlayerTurn();
}


function handleResultValidation(){
    let roundWon = false;
    for (let i = 0; i <= 7; i++){
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if ( a === '' || b === '' || c === '') {
            continue; 
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }

    }
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
        
    }
    let roundDraw = !gameState.includes("");
    if (roundDraw){
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return; 
    }
    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
function handleRestartGame(){
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = curretnPlayerTurn();
    document.querySelectorAll('.cell')
            .forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

