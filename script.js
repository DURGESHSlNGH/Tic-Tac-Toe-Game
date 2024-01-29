let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".rst-btn");
let newBtn = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let message = document.querySelector(".message");

let winConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let turnO = true;
let clickedBtn = 0;

const resetGame = () => {
    turnO = true;
    boxEnable();
    message.classList.add("hide");
    clickedBtn = 0;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        clickedBtn++;
        box.disabled = true;

        checkWinner();
        if(clickedBtn==9){
            msg.innerText = "It's a Draw !!";
            message.classList.remove("hide");
        }
    })
})


const boxDisable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const boxEnable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.color = "#07020D";
    }
}

const checkWinner = () => {
    for (let win of winConditions) {
        let pos1 = boxes[win[0]].innerText;
        let pos2 = boxes[win[1]].innerText;
        let pos3 = boxes[win[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                clickedBtn = 0;
                boxes[win[0]].style.color = "green";
                boxes[win[1]].style.color = "green";
                boxes[win[2]].style.color = "green";
                msg.innerText = `Congratulations, the Winner is ${pos1} !!`;
                message.classList.remove("hide");
                boxDisable();
            }
        }
    }
}

reset.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);