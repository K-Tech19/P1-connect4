
let game = [
    ["0", "1" ,"2" ,"3" ,"4" ,"5" ,"6"] ,
    ["7", "8",  "9", "10","11","12","13"] ,
    ["14","15","16","17","18","19","20"] ,
    ["21","22","23","24","25","26","27"] ,
    ["28","29","30","31","32","33","34"] ,
    ["35","36","37","38","39","40","41"]
] // 
let cells = document.querySelectorAll('.cell');
let messageBox = document.getElementById('winMessage');
let countDown = document.getElementById('timer');
let resetBtn = document.getElementById('reset');
let startBtn = document.getElementById('start');
let timeLeft = 30;
countDown.textContent = timeLeft; 
let moves = 0;
let winningArray = [ 
    [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
    [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
    [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
    [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
    [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
    [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
    [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
    [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
    [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
    [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
    [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
    [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
    [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
    ];
let bSelection = [];
let rSelection = [];
let gameOver = false;
let squareUnlock = {
    
    "0": false, "1": false,   "2": false,  "3": false,
    "4": false,  "5": false,  "6": false,  "7": false,
    "8": false,  "9": false,  "10": false, "11": false,
    "12": false, "13": false, "14": false, "15": false,
    "16": false, "17": false, "18": false, "19": false,
    "20": false, "21": false, "22": false, "23": false,
    "24": false, "25": false, "26": false, "27": false,
    "28": false, "29": false, "30": false, "31": false,
    "32": false, "33": false, "34": false, "35": true,
    "36": true, "37": true, "38": true, "39": true,
    "40": true, "41": true

}; 



function playerGo(){
    messageBox.textContent = 'Black Turn';
}

function start(){
    timerDown();
    playerGo();
} 
startBtn.addEventListener('click', start);


function reset(){
    gameOver == true;
    console.log('RESET');
    
}
resetBtn.addEventListener('click', reset);


function timerMinus(){
    if(timeLeft == 0){
        moves++
        timeLeft = 30;
        timerDown();
        if(moves%2 == 0){
            messageBox.textContent = 'Red Turn'
        } else {
            messageBox.textContent = 'Black Turn'
        }

    } else {
        timeLeft = timeLeft - 1; 
        countDown.textContent = timeLeft;
        console.log(timeLeft)
    }
}

// reset to 30s

function timerDown() {
    countDown.textContent = timeLeft; 
    let minus = setInterval(timerMinus, 1000);
    if (timeLeft == 0) {
        clearInterval(minus);
    }

}

function takeTurn(cell){
    // console.log(cell);
    if (gameOver == false && squareUnlock[cell.target.id] == true ) {
    let cellInt = parseInt(cell.target.id)
    let targetCell = cellInt - 7
    let cellStr = targetCell.toString();
    squareUnlock[cellStr] = true; 
    console.log(squareUnlock);
        if (moves%2 == 0 ){
            // clearInterval(minus);
            timeLeft = 30;
            // if (moves !== 0) {
            // }
            // timerDown();
            // console.log("black's turn")
            messageBox.textContent = 'Reds Turn';
            cell.target.classList.add('blackMove');
            cell.target.removeEventListener('click', takeTurn);
            bSelection.push(parseInt(cell.target.id));
            console.log(bSelection);
            // track the value of whoseTurn
            

            for (let i = 0; i < game.length; i++) {
                // console.log(game[i]);
                // grab id of cell that the player have clicked
                let cellId = cell.target.id
                // console.log("this is cellId", cellId)
                
                for (let j = 0; j < game[i].length; j++) {
                    // console.log(game[i][j]);
                    // need to find the same ids in your game array
                    // need to replace that indices with b & r
                    if (game[i][j] == cellId){
                        game[i][j] = "B"
                        // console.log(game);
                        // track the value of whoseTurn

                    } 
                } 
            } 
            checkWin("B");
        } else {
            // clearInterval(minus);
            timeLeft = 30;
            // timerDown();
            // console.log("red's turn")
            messageBox.textContent = 'Blacks Turn';
            cell.target.classList.add('redMove')
            cell.target.removeEventListener('click', takeTurn)
            rSelection.push(parseInt(cell.target.id))
            for (let i = 0; i < game.length; i++) {
                // console.log(game[i]);
                // grab id of cell that the player have clicked
                let cellId = cell.target.id
                // console.log("this is cellId", cellId)
                
                for (let j = 0; j < game[i].length; j++) {
                    // console.log(game[i][j]);
                    // need to find the same ids in your game array
                    // need to replace that indices with b & r
                    if (game[i][j] == cellId){
                        game[i][j] = "R"
                        // console.log(game);
                    } 
                }
            } 
        checkWin("R");
        }
        moves++
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cells.forEach(cell => {
            cell.addEventListener('click', takeTurn)
    }) 
    
})


let checkWin = (player)=> {
    let tally = 0;
    let playerArray ; 
    if(player == "B") {
        playerArray = bSelection 
    }
    else {
        playerArray = rSelection
    }
    for (let i = 0; i < winningArray.length; i++ ) {
        // console.log(winningArray[i]);
        for(let j = 0; j < winningArray[i].length; j++) {
            // console.log(winningArray[i][j]);
            if (playerArray.includes(winningArray[i][j])) {
                tally++
                // console.log(tally)
                if (tally == 4) {
                    console.log("🦇WINNER");
                    messageBox.textContent = "You WIN🥳";
                    gameOver = true;
                    clearInterval(minus);
                } 
            } 
        }
        tally = 0;
    }   

// make it unable for someone to click on the higher cells
// change message when start game is clicked
// reset button clears board
// when timer ends switch turns 
// 


}



// Binary****

//     let tally = 0; // horizontal
//     for (let i = 0; i < game.length; i++ ) {
//         // console.log("hello cell", game[i]);
//         for (let j = 0; j < game[i].length; j++) {
//             // console.log("bye cell", game[i][j]);
//             if (game[i][j] == player) {
//                 tally++ 
//                 if (tally == 4) {
//                     console.log("🐔 Win!!!");
//                 }
//             } else {
//                 tally = 0;
//             }
//         } 
//         tally = 0;
//     }
//     //  changed checkWin from tally to binary

//   // VERTICAL 
//     for (let i = 0; i < game[0].length; i++ ) {
//         // console.log("hello cell", game[i]);
//         for (let j = 0; j < game.length; j++) {
//             // console.log("print🖨 cell", game[j][i]); 
//             if (game[j][i] == player) {
//                 tally++ 
//                 if (tally == 4) {
//                     console.log("🥳 Win!!!");
//                 }
//             } else {
//                 tally = 0;
//             }
//         } 
//         tally = 0;
//     }

//     for()




// create nested for loop to iterate , ion to go one way one 
// to go another loop
// // this goes from top to bottom

// ***MVP*** (Minimal Viable Product)
// player 1 goes
// player 2 goes
// player one picks , p2 turn
// player two picks , p1 turn
// whos turn
// message letting you know whos turn is it
// countdown to next turn
// spaces empty
// spaces filled
// win message
// start button
// reset button 
// game over
// winning combos
// scoreboard
// game clock




