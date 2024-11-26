//Snake Water Gun
alert("HI");

// Function to generate random number
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Function call


alert("Lets play Snake Water Gun game");
alert("RULES: \n Snake beats Water \n Water beats gun\n Gun beats Snake");

let c_count = 0;
let p_count = 0;
let con = true;

while (con) {
    let choice = randomNumber(1, 3);
    let p = "Y";
    if (choice == 1) {
        p = "S";
    } else if (choice == 2) {
        p = "W";
    } else {
        p = "G";
    }

    let c = prompt("Lets Start\n Write 'S' for Snake \n Write 'W' for Water\nWrite 'G' for Gun");

    if (c == 'S') {
        if (p == 'S') {
            alert("Snake vs Snake\n Its a tie");
        } else if (p == 'W') {
            alert("Water vs Snake\n You Win!!!");
            p_count += 1;
        } else {
            alert("Gun vs Snake\n You lose:(");
            c_count += 1;
        }
    }
    if (c == 'W') {
        if (p == 'S') {
            alert("Snake vs Water\n You lose:(");
            c_count += 1;
        } else if (p == 'W') {
            alert("Water vs Water\n Its a tie");
        } else {
            alert("Gun vs Water\n You Win!!!");
            p_count += 1;
        }
    }
    if (c == 'G') {
        if (p == 'S') {
            alert("Snake vs Gun\n You Win!!!");
            p_count += 1;
        } else if (p == 'W') {
            alert("Water vs Gun\n You lose:(");
            c_count += 1;
        } else {
            alert("Gun vs Gun\n Its a tie");
        }
    }

    let sure = confirm("Do you want to play again?");
    if (sure == false) {
        con = false;
    }
}
alert("Game Ends");

document.getElementById("user").innerHTML+=`Your Score is: `+p_count;

document.getElementById("comp").innerHTML+=`Computer's Score is: `+c_count;
