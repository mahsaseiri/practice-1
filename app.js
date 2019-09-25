var output = document.getElementById("output");

function game1() {


    output.innerHTML = '<div class="page1">rock-paper-scissors';
    output.innerHTML += '<div class="result_box">competitor ' + computer_counter + "-" + my_counter + ' you</div>'
    output.innerHTML += '<button type="button" onclick="rock()" class="rock-button">Rock</button>';
    output.innerHTML += '<button type="button" onclick="paper()" class="paper-button">Paper</button>';
    output.innerHTML += '<button type="button" onclick="scissors()" class="scissors-button">Scissors</button>';
    output.innerHTML += '</div>'
}

function game2() {
    output.innerHTML = '<div class="page2">heads or tails</div>';
    output.innerHTML += '<div class="coin"></div>';
    output.innerHTML += '<button type="button" class="button_coin1" onclick="heads()">heads</button>';
    output.innerHTML += '<button type="button" class="button_coin2" onclick="tails()">tails</button>';
}

function game3() {
    output.innerHTML = '<div class="page3">XO-Game</div>';
    output.innerHTML += '<div class="game3_body">Empty</div>';
}

function game4() {
    output.innerHTML = '<div class="page4">guess-game</div>';
    output.innerHTML += '<h2 class="game4_subtitle">which box is green?</h2>';
    output.innerHTML += '<div class="guess_box1" onclick="guess_box1()">box1</div>';
    output.innerHTML += '<div class="guess_box2" onclick="guess_box2()">box2</div>';
    output.innerHTML += '<div class="guess_box3" onclick="guess_box3()">box3</div>';

}