


let player = "one";
let gameover = false;
let winner = "none";
let current = "";

document.getElementById("score").innerHTML = "player 1 turn";

function place(clicked_button) {

    //alert(document.getElementById("b9").value);

    let button = document.getElementById(clicked_button);
    //document.getElementById(clicked_button).setAttribute('disabled', 'disabled');
    document.getElementById(clicked_button).disabled = true;

    if (player == "one") {
        
        //button.innerHTML = "x";
        button.value = "x";
        current = "1";
        document.getElementById("score").innerHTML = "player 2 turn";

        player = "two";

    } else {
        
        //button.innerHTML = "o";
        button.value = "o";
        current = "2";
        player = "one";
        document.getElementById("score").innerHTML = "player 1 turn";

    }

    if (document.getElementById("b1").value != " " && document.getElementById("b1").value == document.getElementById("b2").value && document.getElementById("b1").value == document.getElementById("b3").value) {
        gameover = true;
        document.getElementById("b1").style.backgroundColor = "rgb(46, 232, 46)";
        document.getElementById("b2").style.backgroundColor = "rgb(46, 232, 46)";
        document.getElementById("b3").style.backgroundColor = "green";
        document.getElementById("b1").setAttribute('disabled','disabled');
        document.getElementById("b1").setAttribute('disabled', 'disabled');
    } else if (document.getElementById("b1").value != " " && document.getElementById("b1").value == document.getElementById("b4").value && document.getElementById("b1").value == document.getElementById("b7").value) {
        gameover = true;
        document.getElementById("b1").style.backgroundColor = "green";
        document.getElementById("b4").style.backgroundColor = "green";
        document.getElementById("b7").style.backgroundColor = "green";
    } else if (document.getElementById("b1").value != " " && document.getElementById("b1").value == document.getElementById("b5").value && document.getElementById("b1").value == document.getElementById("b9").value) {
        gameover = true;
        document.getElementById("b1").style.backgroundColor = "green";
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b9").style.backgroundColor = "green";
    }else if (document.getElementById("b5").value != " " && document.getElementById("b5").value == document.getElementById("b4").value && document.getElementById("b5").value == document.getElementById("b6").value) {
        gameover = true;
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b4").style.backgroundColor = "green";
        document.getElementById("b6").style.backgroundColor = "green";
    }else if (document.getElementById("b5").value != " " && document.getElementById("b5").value == document.getElementById("b2").value && document.getElementById("b5").value == document.getElementById("b8").value) {
        gameover = true;
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b2").style.backgroundColor = "green";
        document.getElementById("b8").style.backgroundColor = "green";
    }else if (document.getElementById("b5").value != " " && document.getElementById("b5").value == document.getElementById("b3").value && document.getElementById("b5").value == document.getElementById("b7").value) {
        gameover = true;
        document.getElementById("b5").style.backgroundColor = "green";
        document.getElementById("b3").style.backgroundColor = "green";
        document.getElementById("b7").style.backgroundColor = "green";
    }else if (document.getElementById("b9").value != " " && document.getElementById("b9").value == document.getElementById("b6").value && document.getElementById("b9").value == document.getElementById("b3").value) {
        gameover = true;
        document.getElementById("b9").style.backgroundColor = "green";
        document.getElementById("b6").style.backgroundColor = "green";
        document.getElementById("b3").style.backgroundColor = "green";
    }else if (document.getElementById("b9").value != " " && document.getElementById("b9").value == document.getElementById("b8").value && document.getElementById("b9").value == document.getElementById("b7").value) {
        gameover = true;
        document.getElementById("b9").style.backgroundColor = "green";
        document.getElementById("b8").style.backgroundColor = "green";
        document.getElementById("b7").style.backgroundColor = "green";
    }

    if (player == "two") {
        
        if (gameover) {
            document.getElementById("score").innerHTML = "";
        }else{
            document.getElementById("score").innerHTML = "player 2 turn";
        }

        

      

    } else {
        
        if (gameover) {
            document.getElementById("score").innerHTML = "";
        }else{
            document.getElementById("score").innerHTML = "player 1 turn";
        }

    }

    if (gameover) {
        
        //document.getElementById("score").innerHTML = "Payer "+ current + " won";

        document.getElementById("b1").setAttribute('disabled', 'disabled');
        document.getElementById("b2").setAttribute('disabled', 'disabled');
        document.getElementById("b3").setAttribute('disabled', 'disabled');
        document.getElementById("b4").setAttribute('disabled', 'disabled');
        document.getElementById("b5").setAttribute('disabled', 'disabled');
        document.getElementById("b6").setAttribute('disabled', 'disabled');
        document.getElementById("b7").setAttribute('disabled', 'disabled');
        document.getElementById("b8").setAttribute('disabled', 'disabled');
        document.getElementById("b9").setAttribute('disabled', 'disabled');

        //document.getElementById("gameover_class").classList.add("gameover_appear");

        //document.getElementById("cover").style.opacity = "0.4";
        //document.getElementById("cover").style.backgroundColor = "rgb(0, 0, 0)";
        



    }


}


const w = document.body.children;



console.log(w[2]);

