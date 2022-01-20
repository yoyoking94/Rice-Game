let tabSize = 5;            // size of the chessBoard (table)
var chessBoard = [];        // the chessBoard
var basket = [];            // the inventory of the player (rice recipient)

let tmp = 0;
let num = 0;

tmp = chessBoard[0];
chessBoard[0] = 0;
basket.push(tmp);

var min = 0;
var max = 10;

//creation of the loop that will create the chessBoard
for (let i = 0; i < (tabSize * tabSize) - 1; i++) {
    rChoice = Math.round(Math.random() * (max - min) + min);         // random choice of numbers between 0 and 10
    chessBoard.push(rChoice)   ;                                    // push ever number into the chessBoard
}

//console.log(chessBoard)     // test
//console.log(basket)         // test    

console.log(chessBoard);
console.log(chessBoard.slice(-1)[0])


if (chessBoard[1] > chessBoard[tabSize]) {
    tmp = chessBoard[1];
    chessBoard[1] = 0;
    basket.push(tmp);
    console.log("droite");
}
else{
    tmp = chessBoard[tabSize];
    chessBoard[tabSize] = 0;
    basket.push(tmp);
    console.log("bas");
}

console.log(chessBoard);

if (chessBoard[tabSize + 1] > chessBoard[tabSize * 2]) {
    tmp = chessBoard[tabSize + 1];
    chessBoard[tabSize + 1] = 0;
    basket.push(tmp);
    console.log("droite");
}
else{
    tmp = chessBoard[tabSize * 2];
    chessBoard[tabSize * 2] = 0;
    basket.push(tmp);
    console.log("bas");
}

console.log(chessBoard);

if (chessBoard[(tabSize * 2) + 1] > chessBoard[tabSize * 3]) {
    tmp = chessBoard[(tabSize * 2) + 1];
    chessBoard[(tabSize * 2) + 1] = 0;
    basket.push(tmp);
    console.log("droite");
}
else{
    tmp = chessBoard[tabSize * 3];
    chessBoard[tabSize * 3] = 0;
    basket.push(tmp);
    console.log("bas");
}

console.log(chessBoard);

if (chessBoard[(tabSize * 3) + 1] > chessBoard[tabSize * 4]) {
    tmp = chessBoard[(tabSize * 3) + 1];
    chessBoard[(tabSize * 3) + 1] = 0;
    basket.push(tmp);
    console.log("droite");
}
else{
    tmp = chessBoard[tabSize * 4];
    chessBoard[tabSize * 4] = 0;
    basket.push(tmp);
    console.log("bas");
}

console.log(chessBoard);

if (chessBoard[(tabSize * 4) + 1] > chessBoard[tabSize * tabSize]) {
    tmp = chessBoard[(tabSize * 4) + 1];
    chessBoard[(tabSize * 4) + 1] = 0;
    basket.push(tmp);
    console.log("droite");
}
else{
    tmp = chessBoard[tabSize * tabSize];
    chessBoard[tabSize * tabSize] = 0;
    basket.push(tmp);
    console.log("bas");
}

if(chessBoard[(tabSize * 4) + 1] > chessBoard[tabSize * tabSize]){
    tmp = chessBoard[(tabSize * 4) + 1];
    chessBoard[(tabSize * 4) + 1] = 0;
    basket.push(tmp);
    console.log("droite");
}
else{
    tmp = chessBoard[tabSize * tabSize];
    chessBoard[tabSize * tabSize] = 0;
    basket.push(tmp);
    console.log("bas");
}

console.log(chessBoard);