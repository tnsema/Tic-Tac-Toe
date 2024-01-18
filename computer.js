
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");

let currentPlayer = "";
let nextPlayer = "Player";
let isOver = false;
let readyToPlay = true;
let chosenBlock = null;
let toPlace = b6;


function computerChooseBlockEasy() {
    
    let rand = Math.floor(Math.random() * 9);

    const blocksArray = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];

    return blocksArray[rand];

    

}

function returnBlock() {

    let now = computerChooseBlockEasy();
    
    while(document.getElementById(now).disabled == true) {
        
        now = computerChooseBlockEasy();

    }

    return now;

}

function computerChooseBlockMedium() {
    
    
        
        if (b5.disabled != true ) {
            
            toPlace = b5;

        }else if( (b1.value != "o" && b2.value != "o" && b3.value != "o") && ((b1.value == "x" && b2.value == "x") || (b1.value == "x" && b3.value == "x") || (b3.value == "x" && b2.value == "x"))){

            const blocksList = [b1, b2, b3];
            let notUsed = null;

            for (let index = 0; index < blocksList.length; index++) {
                
                if (blocksList[index] != "x") {
                    notUsed = blocksList[index];
                    break;
                }

                if (notUsed.disabled != true) {
                    toPlace = notUsed;
                }else{
                    toPlace = returnBlock();
                }
                
            }

            


        }else if( (b1.value != "o" && b5.value != "o" && b9.value != "o") && ((b1.value == "x" && b5.value == "x") || (b1.value == "x" && b9.value == "x") || (b5.value == "x" && b9.value == "x"))){

            const blocksList = [b1, b5, b9];
            let notUsed = null;

            for (let index = 0; index < blocksList.length; index++) {
                
                if (blocksList[index] != "x") {
                    notUsed = blocksList[index];
                    break;
                }

                if (notUsed.disabled != true) {
                    toPlace = notUsed;
                }else{
                    toPlace = returnBlock();
                }
                
            }

            


        }else if( (b1.value != "o" && b4.value != "o" && b7.value != "o") && ((b1.value == "x" && b4.value == "x") || (b1.value == "x" && b7.value == "x") || (b4.value == "x" && b7.value == "x"))){

            const blocksList = [b1, b4, b7];
            let notUsed = null;

            for (let index = 0; index < blocksList.length; index++) {
                
                if (blocksList[index] != "x") {
                    notUsed = blocksList[index];
                    break;
                }

                if (notUsed.disabled != true) {
                    toPlace = notUsed;
                }else{
                    toPlace = returnBlock();
                }
                
            }

            


        }else if( (b5.value != "o" && b3.value != "o" && b7.value != "o") && ((b5.value == "x" && b3.value == "x") || (b5.value == "x" && b7.value == "x") || (b3.value == "x" && b7.value == "x"))){

            const blocksList = [b5, b7, b3];
            let notUsed = null;

            for (let index = 0; index < blocksList.length; index++) {
                
                if (blocksList[index] != "x") {
                    notUsed = blocksList[index];
                    break;
                }

                if (notUsed.disabled != true) {
                    toPlace = notUsed;
                }else{
                    toPlace = returnBlock();
                }
                
            }

            


        }else if( (b5.value != "o" && b2.value != "o" && b8.value != "o") && ((b5.value == "x" && b2.value == "x") || (b5.value == "x" && b8.value == "x") || (b8.value == "x" && b2.value == "x"))){

            const blocksList = [b5, b2, b8];
            let notUsed = null;

            for (let index = 0; index < blocksList.length; index++) {
                
                if (blocksList[index] != "x") {
                    notUsed = blocksList[index];
                    break;
                }

                if (notUsed.disabled != true) {
                    toPlace = notUsed;
                }else{
                    toPlace = returnBlock();
                }
                
            }

            


        }else if( (b1.value != "o" && b2.value != "o" && b3.value != "o") && ((b1.value == "x" && b2.value == "x") || (b1.value == "x" && b3.value == "x") || (b3.value == "x" && b2.value == "x"))){

            const blocksList = [b1, b2, b3];
            let notUsed = null;

            for (let index = 0; index < blocksList.length; index++) {
                
                if (blocksList[index] != "x") {
                    notUsed = blocksList[index];
                    break;
                }

                if (notUsed.disabled != true) {
                    toPlace = notUsed;
                }else{
                    toPlace = returnBlock();
                }
                
            }

            


        }else if( (b1.value != "o" && b2.value != "o" && b3.value != "o") && ((b1.value == "x" && b2.value == "x") || (b1.value == "x" && b3.value == "x") || (b3.value == "x" && b2.value == "x"))){

            const blocksList = [b1, b2, b3];
            let notUsed = null;

            for (let index = 0; index < blocksList.length; index++) {
                
                if (blocksList[index] != "x") {
                    notUsed = blocksList[index];
                    break;
                }

                if (notUsed.disabled != true) {
                    toPlace = notUsed;
                }else{
                    toPlace = returnBlock();
                }
                
            }

            


        }else if( (b1.value != "o" && b2.value != "o" && b3.value != "o") && ((b1.value == "x" && b2.value == "x") || (b1.value == "x" && b3.value == "x") || (b3.value == "x" && b2.value == "x"))){

            const blocksList = [b1, b2, b3];
            let notUsed = null;

            for (let index = 0; index < blocksList.length; index++) {
                
                if (blocksList[index] != "x") {
                    notUsed = blocksList[index];
                    break;
                }

                if (notUsed.disabled != true) {
                    toPlace = notUsed;
                }else{
                    toPlace = returnBlock();
                }
                
            }

            


        }else{

            return returnBlock();

        }

}


function computerPlay() {
    
    //computerChooseBlockMedium();
    let blockToPlay = returnBlock();
    //let blockToPlay = toPlace;



    document.getElementById(blockToPlay).value = "o";
    document.getElementById(blockToPlay).disabled = true;
    document.getElementById("score").innerHTML = "Player's turn";
    currentPlayer = "Computer";

    thereIsWin();

    readyToPlay = true;

}


function PlayerPlay(blockId) {

    document.getElementById("playAgain").style.visibility = "hidden"

    if (readyToPlay) {

        chosenBlock = blockId;
        
        document.getElementById(blockId).value = "x";
        document.getElementById(blockId).disabled = true;
        document.getElementById("score").innerHTML = "Computer's turn";
        currentPlayer = "Player";
    
        thereIsWin();
    
    
    
        if (isOver) {
            
        } else {
            
            setTimeout(computerPlay, 1000);
    
        }

        readyToPlay = false;

    } else {
        
    }

}

function thereIsWin() {
    
    if (b1.value != " " && b1.value == b2.value && b1.value == b3.value) {
        gameOver();
        isOver = true;
        colorThem(b1, b2, b3);


    } else if(b1.value != " " && b1.value == b4.value && b1.value == b7.value){
        gameOver();
        isOver  = true;
        colorThem(b1, b4, b7);
    } else if(b1.value != " " && b1.value == b5.value && b1.value == b9.value){
        gameOver();
        isOver  = true;
        colorThem(b1, b5, b9);
    } else if(b5.value != " " && b5.value == b3.value && b5.value == b7.value){
        gameOver();
        isOver  = true;
        colorThem(b5, b7, b3);
    } else if(b5.value != " " && b5.value == b2.value && b5.value == b8.value){
        gameOver();
        isOver  = true;
        colorThem(b5, b2, b8);
    } else if(b5.value != " " && b5.value == b4.value && b5.value == b6.value){
        gameOver();
        isOver  = true;
        colorThem(b5, b4, b6);
    } else if(b9.value != " " && b9.value == b6.value && b9.value == b3.value){
        gameOver();
        isOver  = true;
        colorThem(b9, b6, b3);
    } else if(b9.value != " " && b9.value == b7.value && b9.value == b8.value){
        gameOver();
        isOver  = true;
        colorThem(b9, b8, b7);
    }

}

function gameOver() {
    
    b1.disabled = true;    
    b2.disabled = true;    
    b3.disabled = true;    
    b4.disabled = true;    
    b5.disabled = true;    
    b6.disabled = true;    
    b7.disabled = true;    
    b8.disabled = true;    
    b9.disabled = true;

    document.getElementById("score").innerHTML = currentPlayer + " won";

    playAgainAppear();
    

}

function colorThem(block1, block2, block3) {
    
    block1.style.backgroundColor = "rgb(46, 232, 46)";
    block2.style.backgroundColor = "rgb(46, 232, 46)";
    block3.style.backgroundColor = "rgb(46, 232, 46)";

    block1.classList.add("blink");
    block2.classList.add("blink");
    block3.classList.add("blink");

    isOver = false;

}

function playAgainAppear() {
    
    document.getElementById("playAgain").style.visibility = "visible" ;

}

function restartGame() {
    
    b1.disabled = false;
    b2.disabled = false;
    b3.disabled = false;
    b4.disabled = false;
    b5.disabled = false;
    b6.disabled = false;
    b7.disabled = false;
    b8.disabled = false;
    b9.disabled = false;

    b1.value = " ";
    b2.value = " ";
    b3.value = " ";
    b4.value = " ";
    b5.value = " ";
    b6.value = " ";
    b7.value = " ";
    b8.value = " ";
    b9.value = " ";

    b1.style.backgroundColor = "rgb(0, 0, 0)";
    b2.style.backgroundColor = "rgb(0, 0, 0)";
    b3.style.backgroundColor = "rgb(0, 0, 0)";
    b4.style.backgroundColor = "rgb(0, 0, 0)";
    b5.style.backgroundColor = "rgb(0, 0, 0)";
    b6.style.backgroundColor = "rgb(0, 0, 0)";
    b7.style.backgroundColor = "rgb(0, 0, 0)";
    b8.style.backgroundColor = "rgb(0, 0, 0)";
    b9.style.backgroundColor = "rgb(0, 0, 0)";
 
}