let playerOneTurn = true;
let playerTwoTurn;
let validMove;
let moves = 0;
let computerMove;
let Player1;
let Player2;
let playerWin;
const startGame = document.querySelector('#start');
const restartGame = document.querySelector('#restart');

const display = document.querySelector('#display');

let gameArray = ["", "", "", "", "", "", "", "", ""];


const Player = (name, symbol) => {
    const move = (playerMove) => {
        // console.log(playerMove);
        if (playerMove == 'one' && gameArray[0] == "") {
            gameArray[0] = symbol;
            validMove = true;
        }
        else if (playerMove == "two" && gameArray[1] == "") {
            gameArray[1] = symbol;
            validMove = true;
        }
        else if (playerMove == "three" && gameArray[2] == "") {
            gameArray[2] = symbol;
            validMove = true;
        }
        else if (playerMove == "four" && gameArray[3] == "") {
            gameArray[3] = symbol;
            validMove = true;
        }
        else if (playerMove == "five" && gameArray[4] == "") {
            gameArray[4] = symbol;
            validMove = true;
        }
        else if (playerMove == "six" && gameArray[5] == "") {
            gameArray[5] = symbol;
            validMove = true;
        }
        else if (playerMove == "seven" && gameArray[6] == "") {
            gameArray[6] = symbol;
            validMove = true;
        }
        else if (playerMove == "eight" && gameArray[7] == "") {
            gameArray[7] = symbol;
            validMove = true;
        }
        else if (playerMove == "nine" && gameArray[8] == "") {
            gameArray[8] = symbol;
            validMove = true;
        }
        else {
            alert("space is not available");
            moves--;
            validMove = false;
        }
    }
    const checkWin = () => {
        let winner;

        if (gameArray[0] == symbol && gameArray[1] == symbol && gameArray[2] == symbol) {
            winner = name;
            display.innerHTML = `${winner} wins!`;
            gameArray = ["", "", "", "", "", "", "", "", ""];
            const changeBackground1 = document.getElementById('one');
            const changeBackground2 = document.getElementById('two');
            const changeBackground3 = document.getElementById('three');

            changeBackground1.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground2.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground3.style.backgroundColor = 'rgb(233, 156, 156)';

            moves = 0;
            playerWin = true;
        }
        if (gameArray[3] == symbol && gameArray[4] == symbol && gameArray[5] == symbol) {
            winner = name;
            display.innerHTML = `${winner} wins!`;
            gameArray = ["", "", "", "", "", "", "", "", ""];
            const changeBackground1 = document.getElementById('four');
            const changeBackground2 = document.getElementById('five');
            const changeBackground3 = document.getElementById('six');

            changeBackground1.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground2.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground3.style.backgroundColor = 'rgb(233, 156, 156)';

            moves = 0;
            playerWin = true;
        }
        if (gameArray[6] == symbol && gameArray[7] == symbol && gameArray[8] == symbol) {
            winner = name;
            display.innerHTML = `${winner} wins!`;
            gameArray = ["", "", "", "", "", "", "", "", ""];
            const changeBackground2 = document.getElementById('seven');
            const changeBackground3 = document.getElementById('eight');
            const changeBackground1 = document.getElementById('nine');

            changeBackground1.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground2.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground3.style.backgroundColor = 'rgb(233, 156, 156)';

            moves = 0;
            playerWin = true;
        }
        if (gameArray[0] == symbol && gameArray[3] == symbol && gameArray[6] == symbol) {
            winner = name;
            display.innerHTML = `${winner} wins!`;
            gameArray = ["", "", "", "", "", "", "", "", ""];
            const changeBackground1 = document.getElementById('one');
            const changeBackground2 = document.getElementById('four');
            const changeBackground3 = document.getElementById('seven');

            changeBackground1.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground2.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground3.style.backgroundColor = 'rgb(233, 156, 156)';

            moves = 0;
            playerWin = true;
        }
        if (gameArray[1] == symbol && gameArray[4] == symbol && gameArray[7] == symbol) {
            winner = name;
            display.innerHTML = `${winner} wins!`;
            gameArray = ["", "", "", "", "", "", "", "", ""];
            const changeBackground1 = document.getElementById('two');
            const changeBackground2 = document.getElementById('five');
            const changeBackground3 = document.getElementById('eight');

            changeBackground1.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground2.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground3.style.backgroundColor = 'rgb(233, 156, 156)';

            moves = 0;
            playerWin = true;
        }
        if (gameArray[2] == symbol && gameArray[5] == symbol && gameArray[8] == symbol) {
            winner = name;
            display.innerHTML = `${winner} wins!`;
            gameArray = ["", "", "", "", "", "", "", "", ""];
            const changeBackground3 = document.getElementById('three');
            const changeBackground1 = document.getElementById('six');
            const changeBackground2 = document.getElementById('nine');

            changeBackground1.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground2.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground3.style.backgroundColor = 'rgb(233, 156, 156)';

            moves = 0;
            playerWin = true;
        }
        if (gameArray[0] == symbol && gameArray[4] == symbol && gameArray[8] == symbol) {
            winner = name;
            display.innerHTML = `${winner} wins!`;
            gameArray = ["", "", "", "", "", "", "", "", ""];
            const changeBackground1 = document.getElementById('one');
            const changeBackground2 = document.getElementById('five');
            const changeBackground3 = document.getElementById('nine');

            changeBackground1.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground2.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground3.style.backgroundColor = 'rgb(233, 156, 156)';

            moves = 0;
            playerWin = true;
        }
        if (gameArray[6] == symbol && gameArray[4] == symbol && gameArray[2] == symbol) {
            winner = name;
            display.innerHTML = `${winner} wins!`;
            gameArray = ["", "", "", "", "", "", "", "", ""];
            const changeBackground1 = document.getElementById('seven');
            const changeBackground2 = document.getElementById('five');
            const changeBackground3 = document.getElementById('three');

            changeBackground1.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground2.style.backgroundColor = 'rgb(233, 156, 156)'
            changeBackground3.style.backgroundColor = 'rgb(233, 156, 156)';

            moves = 0;
            playerWin = true;
        }
    }
    return { name, symbol, move, checkWin };
}
const GameBoard = () => {
    try {
        display.innerHTML = `${Player1.name}'s turn`;
    }
    catch {
        //pass
    }

    let idListed = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let idx = 0;
    const container = document.querySelector('.grid');
    removeAllNodes(container);
    for (let i = 0; i < 3; i++) {

        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for (let j = 0; j < 3; j++) {
            let gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.innerHTML = gameArray[idx];
            gridItem.setAttribute('id', idListed[idx++]);
            gridRow.appendChild(gridItem);
        }
        container.appendChild(gridRow);
    }

    const buttons = document.querySelectorAll('.grid-item');
    // console.log(buttons);

    buttons.forEach(button => button.addEventListener('click', (e) => {
        // if(playerWin == true) {
        //     GameBoard();
        //     return;
        // }
        let playerMove = e.target.id;
        console.log(playerMove);
        if (computerMove) {
            if (playerOneTurn) {
                Player1.move(playerMove);
                if (validMove) {
                    GameBoard();
                    playerOneTurn = false;
                    display.innerHTML = `${Player2.name}'s turn`;
                    const change = document.getElementById(e.target.id);
                    change.innerHTML = Player1.symbol;
                }
            }
            else if (!playerOneTurn) {
                let needMove = true;
                while (needMove) {
                    randomNum = Math.floor((Math.random() * 10));
                    if (gameArray[randomNum] == '') {
                        playerMove = idListed[randomNum];
                        needMove = false;
                    }
                }

                Player2.move(playerMove);
                GameBoard();
                display.innerHTML = `${Player2.name}'s turn`;
                playerOneTurn = true;
            }
        }
        else {
            if (playerOneTurn) {

                Player1.move(playerMove);
                if (validMove) {
                    GameBoard();
                    playerOneTurn = false;
                    display.innerHTML = `${Player2.name}'s turn`;
                    const change = document.getElementById(e.target.id);
                    change.innerHTML = Player1.symbol;
                }
            } else if (!playerOneTurn) {
                Player2.move(playerMove);
                if (validMove) {
                    GameBoard();
                    playerOneTurn = true;
                    display.innerHTML = `${Player1.name}'s turn`;
                    const change = document.getElementById(e.target.id);
                    change.innerHTML = Player2.symbol;
                }
            }
        }
        
        moves++;
        Player1.checkWin();

        Player2.checkWin();
        
        if (moves == 9) {
            // tie     
            gameArray = ["", "", "", "", "", "", "", "", ""];
            winner = `This game was a tie`;
            moves = 0;
            display.innerHTML = winner;
        }
    }));
}
const aiButton = document.querySelector('#playWithComp');
aiButton.addEventListener('click',(e) =>{
    moves  = 0;
    playerOneTurn = true;
    let p1Name = prompt('Player 1 name?');
    Player1 = Player(p1Name,"X");

    Player2 = Player('Computer','O');
    computerMove = true;
    gameArray = ["", "", "", "", "", "", "", "", ""];
    GameBoard();
})
const start = document.querySelector('#start');
start.addEventListener('click', (e) => {
    moves = 0;
    playerOneTurn = true;
    let p1Name = prompt('Player 1 name ?');
    Player1 = Player(p1Name, "X");

    let p2Name = prompt('Player 2 name ?');
    Player2 = Player(p2Name, "O");

    computerMove = false;
    gameArray = ["", "", "", "", "", "", "", "", ""];
    GameBoard(Player1, Player2);
})
restartGame.addEventListener('click', () => {
    moves = 0;
    playerOneTurn = true;
    computerMove - true;
    gameArray = ["", "", "", "", "", "", "", "", ""];
    GameBoard();
})
function removeAllNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
GameBoard();