
let cells = document.querySelectorAll('.cell');
let moves = 0;
document.addEventListener("DOMContentLoaded", () => {
    cells.forEach(cell => {
        cell.addEventListener('click', ()=>{
            console.log(cell);
            takeTurn(cell);
        })
    }) 
    
})


function takeTurn (cell){
    if (moves%2 == 0){
        console.log("black's turn")
        cell.classList.add('blackMove')
    } else {
        console.log("red's turn")
        cell.classList.add('redMove')
    }
    moves++
}


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
