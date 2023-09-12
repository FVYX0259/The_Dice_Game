function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
let randomnumber1 = Math.floor(getRandomArbitrary(1, 7));

let randomnumber2 = Math.floor(getRandomArbitrary(1, 7));

var randomimagesrc1 = "dice" + randomnumber1 + ".png";
document.querySelector(".img1").setAttribute("src",randomimagesrc1);

var randomimagesrc2 = "dice" + randomnumber2 + ".png";
document.querySelector(".img2").setAttribute("src",randomimagesrc2);

if(randomnumber1 > randomnumber2){
    document.querySelector(".container h1").innerHTML = "Player 1 wins the Match 🎊!";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector(".container h1").innerHTML = "Player 2 wins the Match 🎊!";
}
else{
    document.querySelector(".container h1").innerHTML = "There is Draw Between Player1 & Player2";
}
