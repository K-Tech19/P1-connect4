
let cells = document.querySelectorAll('.cell');
let moves = 0;
function takeTurn (cell){
    console.log(cell);
    if (moves%2 == 0){
        console.log("black's turn")
        cell.target.classList.add('blackMove')
        cell.target.removeEventListener('click', takeTurn)
    } else {
        console.log("red's turn")
        cell.target.classList.add('redMove')
        cell.target.removeEventListener('click', takeTurn)
    }
    moves++
}

document.addEventListener("DOMContentLoaded", () => {
    cells.forEach(cell => {
        cell.addEventListener('click', takeTurn)
    }) 
    
})




let game = [
    [0,0,0,0,0,0,0] ,
    [0,0,0,0,0,0,0] ,
    [0,0,0,0,0,0,0] ,
    [0,0,0,0,0,0,0] ,
    [0,0,0,0,0,0,0] ,
    [0,0,0,0,0,0,0]
]
// create nested for loop to iterate , ion to go one way one 
// to go another loop
// this goes from top to bottom
for (let i = 0; i < game.length; i++) {
    console.log(game[i]);
    for (let j = 0; j < game[i].length; j++) {
        console.log(game[i][j]);
    }
}







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
