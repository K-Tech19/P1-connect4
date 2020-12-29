
let game = [
    ["0","1","2","3","4","5","6"] ,
    ["7","8","9","10","11","12","13"] ,
    ["14","15","16","17","18","19","20"] ,
    ["21","22","23","24","25","26","27"] ,
    ["28","29","30","31","32","33","34"] ,
    ["35","36","37","38","39","40","41"]
]
let cells = document.querySelectorAll('.cell');
let moves = 0;
function takeTurn (cell){
    console.log(cell);
    if (moves%2 == 0){
        console.log("black's turn")
        cell.target.classList.add('blackMove')
        cell.target.removeEventListener('click', takeTurn)
        for (let i = 0; i < game.length; i++) {
            console.log(game[i]);
            // grab id of cell that the player have clicked
            let cellId = cell.target.id
            console.log("this is cellId", cellId)
            
            for (let j = 0; j < game[i].length; j++) {
                console.log(game[i][j]);
                // need to find the same ids in your game array
                // need to replace that indices with b & r
                if (game[i][j] == cellId){
                    game[i][j] = "B"
                    console.log(game);
                } 
            }
        }
    } else {
        console.log("red's turn")
        cell.target.classList.add('redMove')
        cell.target.removeEventListener('click', takeTurn)
        for (let i = 0; i < game.length; i++) {
            console.log(game[i]);
            // grab id of cell that the player have clicked
            let cellId = cell.target.id
            console.log("this is cellId", cellId)
            
            for (let j = 0; j < game[i].length; j++) {
                console.log(game[i][j]);
                // need to find the same ids in your game array
                // need to replace that indices with b & r
                if (game[i][j] == cellId){
                    game[i][j] = "R"
                    console.log(game);
                } 
            }
        }
    }
    moves++
}

document.addEventListener("DOMContentLoaded", () => {
    cells.forEach(cell => {
        cell.addEventListener('click', takeTurn)
    }) 
    
})




// create nested for loop to iterate , ion to go one way one 
// to go another loop
// // this goes from top to bottom
// for (let i = 0; i < game.length; i++) {
//     console.log(game[i]);
//     // grab id of cell that the player have clicked
//     let cellId = cell.target.id
//     // need to know if black or red
    
//     // need to find the same ids in your game array
//     // need to replace that indices with b & r
//     for (let j = 0; j < game[i].length; j++) {
//         console.log(game[i][j]);
//     }
// }








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



// 
