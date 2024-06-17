var player = "X";
var win = true;

var enabled = true;

for (i = 0; i < 9; i++) {
    document.body.querySelector(".container").children[i].innerHTML = " ";
}

const possibility = [123, 456, 789,369, 147, 258, 159, 357];

function check_winner() {
    for (i = 0; i < possibility.length; i++) {
        let a = possibility[i];
        win = true;
        for (j = 0; j < 3; j++) {
            while (a > 0) {
                let d = a % 10;

                let IH = document.body.querySelector(".container").children[d - 1].innerHTML;
                if (IH != player) {
                    win = false;
                    break;
                }
                a = Math.floor(a / 10);
            }
            if (win) {
                winner();
            }
        }
    }
}


function clicked(i) {
    if (enabled == true) {
        let IH = document.body.querySelector(".container").children[i - 1].innerHTML;
        if (IH === "X" || IH === "O") { }
        else {
            document.body.querySelector(".container").children[i - 1].innerHTML = player;
            check_winner();
            change_player();
        }
    }
}
function restart() {
    enabled = true;

    for (i = 0; i < 9; i++) {
        let div = document.body.querySelector(".container").children[i];
        div.innerHTML = " ";

    }

    player = "X";
    win = true;

    let div = document.body.children[0].children[2];
    div.classList.add("hidden");
}
function change_player() {
    if (player === "X") {
        player = "O";
    }
    else {
        player = "X";
    }
}
function winner() {
    console.log("winner" + player);

    for (i = 0; i < 9; i++) {

        let div = document.body.querySelector(".container").children[i];
        // div.removeAttribute("onclick");
        enabled = false;

    }
    let div = document.body.children[0].children[2];
    div.innerHTML = player + "  WON!"
    div.classList.remove("hidden");

}