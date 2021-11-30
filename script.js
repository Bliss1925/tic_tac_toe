
const display = (() => {  //display module that creates grid for board
        displaySize = () => {
        dis = document.createElement('div');
        dis.style.display = 'grid';
        dis.style.height = '50%';
        dis.style.width = '50%';
        dis.style.color = 'black';
        dis.style.gridTemplate = '33% 33% 33% / auto auto auto';
        dis.style.gridGap = '5%';
        dis.style.backgroundColor = 'black';
        dis.style.margin = 'auto';
        dis.style.marginTop = '60px'
        dis.setAttribute('id', '#display');
        return dis;
    };
    return {
            populateDisplay: () => {
            let dis = displaySize();
            document.body.append(dis);
         }
    };
})();

display.populateDisplay();

const gameBoard = (() =>{ //initializesgame board array of divs
    let board = Array.from('123456789');
    for (let i = 0; i < board.length; i++) {
        board[i] = document.createElement('div');
        board[i].style.backgroundColor = 'lightyellow';
        board[i].style.fontSize = '50px';
        board[i].style.textAlign = 'center';
        board[i].addEventListener('click', function() {
            
            if (player1.isTurn == true) {
                board[i].innerHTML = player1.symbol;
                player1.isTurn = false;
                player2.isTurn = true; debugger;
                if (checkVictory(board) == true){
                    alert("You win!");
                    return;
                }
                return player1.isTurn, player2.isTurn;
            }
            else if(player2.isTurn == true) {
                board[i].innerHTML = player2.symbol;
                player2.isTurn = false;
                player1.isTurn = true;
                if (checkVictory(board) == true){
                    alert("You win!");
                    return;
                }    
                return player1.isTurn, player2.isTurn;
            }
            
        })
    }   
    
    return board;

    
})();

function populateBoard(gameBoard) { //print board array to display
    let dis = document.getElementById('#display');
    for (let j = 0; j<gameBoard.length; j++) {
    dis.append(gameBoard[j]);
    }
    return dis;
}

let board = populateBoard(gameBoard);

const startButtons = (() => { 
    buttonContainer = (() => {//populates start buttons for game
        let x = document.createElement('div');
        x.style.display = 'flex';
        x.style.marginLeft = '25%';
        x.style.marginTop = '10%';
        x.style.height = '20%';
        x.style.width = '50%';
        x.style.justifyContent = 'space-between';
        x.setAttribute('id', '#buttonContainer');
        return document.body.append(x);
    })();
    buttonContent = ((x) => {
        let z = document.createElement('button');
        z.innerHTML ='1 Player';
        z.style.height = '100%';
        z.style.width = '40%';  
        z.setAttribute('id', '#1player');

        let y = document.createElement('button');
        y.innerHTML ='2 Players';
        y.style.height = '100%';
        y.style.width = '40%';    
        y.setAttribute('id', "#2player");
        let a = document.getElementById('#buttonContainer');
        return a.append(z), a.append(y);
    })();
    function nameChange() {//assigns actual value to players names and starts game
        
        player1.name = prompt("What is your name Player 1?");
        player2.name = prompt("What is your name Player 2?");
        player1.isTurn = true;
        let b = document.getElementById('#buttonContainer');
        
        while (b.hasChildNodes()){
            b.removeChild(b.childNodes[0]);
        }
        let z = document.createElement('div');
        z.innerHTML = player1.name;
        z.style.display = 'inline-block';
        z.style.height = '100%';
        z.style.width = '40%';  
        z.setAttribute('id', '#player1');

        let y = document.createElement('div');
        y.innerHTML = player2.name;
        z.style.display = 'inline-block';
        y.style.height = '100%';
        y.style.width = '40%';  
        y.setAttribute('id', '#player2');

        return player1.name, player2.name, b.append(z), b.append(y);
    }

    let x = document.getElementById('#2player');
    x.addEventListener('click', nameChange);
})();

const Players = (name, symbol) => {
    this.name = name;
    this.symbol = symbol;
    this.isTurn = false;
    
    return {name, symbol, isTurn};
}

let player1 = Players('J', 'X');//initial player values
let player2 = Players('C', "O");

function checkVictory(board) {
    checkHorizontal = (() => {
        if (board[0, 1, 2].innerHTML == player1.symbol || player2.symbol) {
            return true;
        }
        else if (board[3, 4, 5].innerHTML == player1.symbol || player2.symbol) {
            return true;
        }
        else if (board[6, 7, 8].innerHTML == player1.symbol || player2.symbol) {
            return true;
        }
        else {
            return false;
        }
    })();
    checkVertcal = (() => {
        if (board[0, 3, 6].innerHTML == player1.symbol || player2.symbol) {
            return true;
        }
        else if (board[1, 4, 7].innerHTML == player1.symbol || player2.symbol) {
            return true;
        }
        else if (board[2, 5, 8].innerHTML == player1.symbol || player2.symbol) {
            return true;
        }
        else {
            return false;
        }
    })();
    checkDiagonal = (() => {
        if (board[0, 4, 8].innerHTML == player1.symbol || player2.symbol) {
            return true;
        }
        else if (board[2, 4, 6].innerHTML == player1.symbol || player2.symbol) {
            return true;
        }
        else {
            return false;
        }
    })();
}


