var my_counter = 0;
var computer_counter = 0;
var total_counter = 0;
var rand = 0;


function check() {

    if (total_counter == 3) {
        if (my_counter > computer_counter) {
            output.innerHTML = '<div class="final_result">you win!</div>';
        } else if (my_counter == computer_counter) {
            output.innerHTML = '<div class="final_result">try again!</div>';
        } else {
            output.innerHTML = '<div class="final_result">you loose!</div>';
        }
    } else {
        true;
    }
}

function rock() {
    var rand = Math.floor(Math.random() * 3);
    var i = 'rock';
    if (rand == 0) {
        rand = 'rock';
    } else if (rand == 1) {
        rand = 'paper';
    } else {
        rand = 'scissors';
    }
    console.log(rand);
    if (rand == 'rock') {
        true;
    } else if (rand == 'paper') {
        computer_counter++;
    } else {
        my_counter++;
    }
    console.log(my_counter);
    console.log(computer_counter);
    output.innerHTML += '<div class="result_box">competitor ' + computer_counter + "-" + my_counter + ' you' + '<br>' + rand + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + '</div>';

    total_counter++;
    check();
}

function paper() {
    var rand = Math.floor(Math.random() * 3);
    var i = 'paper';
    if (rand == 0) {
        rand = 'rock';
    } else if (rand == 1) {
        rand = 'paper';
    } else {
        rand = 'scissors';
    }
    console.log(rand);
    if (rand == 'rock') {
        my_counter++;
    } else if (rand == 'paper') {
        true;
    } else {
        computer_counter++;
    }
    console.log(my_counter);
    console.log(computer_counter);
    output.innerHTML += '<div class="result_box">competitor ' + computer_counter + "-" + my_counter + ' you' + '<br>' + rand + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + '</div>';
    total_counter++;
    check();

}

function scissors() {
    var rand = Math.floor(Math.random() * 3);
    var i = 'scissors';
    if (rand == 0) {
        rand = 'rock';
    } else if (rand == 1) {
        rand = 'paper';
    } else {
        rand = 'scissors';
    }
    console.log(rand);
    if (rand == 'rock') {
        computer_counter++;
    } else if (rand == 'paper') {
        my_counter++;
    } else {
        true;
    }
    console.log(my_counter);
    console.log(computer_counter);
    output.innerHTML += '<div class="result_box">competitor ' + computer_counter + "-" + my_counter + ' you' + '<br>' + rand + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i + '</div>';
    total_counter++;
    check();
}

//game4
var state4;
var rand4;
var count4 = 0
rand4 = Math.floor(Math.random() * 3);
switch (rand4) {
    case 0:
        state4 = 1;
        break;
    case 1:
        state4 = 2;
        break;
    case 2:
        state4 = 3;
        break;
}

function guess_box1() {
    if (state4 == 1) {
        output.innerHTML += '<div class="guess_box1 winbox">correct</div>';

    } else {
        output.innerHTML += '<div class="guess_box1 loosebox">wrong</div>';
    }
}

function guess_box2() {
    if (state4 == 2) {
        output.innerHTML += '<div class="guess_box2 winbox">correct</div>';

    } else {
        output.innerHTML += '<div class="guess_box2 loosebox">wrong</div>';
    }
}

function guess_box3() {
    if (state4 == 3) {
        output.innerHTML += '<div class="guess_box3 winbox">correct</div>';

    } else {
        output.innerHTML += '<div class="guess_box3 loosebox">wrong</div>';
    }
}
// game 2 
var rand2;
rand2 = Math.floor(Math.random() * 2);
if (rand2 == 0) {
    rand2 = 'heads';
} else {
    rand2 = 'tails';
}

function heads() {
    if (rand2 == 'heads') {
        output.innerHTML += '<div class="coin coin1"></div>';
        output.innerHTML += '<div class="game2_result">you win</div>';
    } else {
        output.innerHTML += '<div class="coin coin2"></div>';
        output.innerHTML += '<div class="game2_result">you loose</div>';
    }
}

function tails() {
    if (rand2 == 'tails') {
        output.innerHTML += '<div class="coin coin2"></div>';
        output.innerHTML += '<div class="game2_result">you win</div>';
    } else {
        output.innerHTML += '<div class="coin coin1"></div>';
        output.innerHTML += '<div class="game2_result">you loose</div>';
    }
}