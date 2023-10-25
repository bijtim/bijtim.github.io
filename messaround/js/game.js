let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;

    let lname = document.getElementById("lname").value;

    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings , " + age + " year old " + fname + " " + lname + "!";
}

function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer");

    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;

    let honeyselected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + " you are wrong. Go to school";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + " you are wrong. Go to school";
    } else {
        triviaAnswer.innerHTML = fname + "  you are correct. Nice Job!";
    }

}

function lie() {
    let lieAnswer = document.getElementById("lie-answer");

    let frisbeeSelected = document.getElementById("frisbee").checked;
    let pokerSelected = document.getElementById("poker").checked;

    let africaselected = document.getElementById("africa").checked;

    if (frisbeeSelected) {
        lieAnswer.innerHTML = fname + " you are wrong. I do play frisbee.";
    } else if (pokerSelected) {
        lieAnswer.innerHTML = fname + " you are correct. I'm addicted to poker ";
    } else {
        lieAnswer.innerHTML = fname + " you are wrong. My parents were born in africa";
    }

}