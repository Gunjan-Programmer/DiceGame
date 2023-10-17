var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
console.log("Person1 : " + randomNumber1);
document.querySelector(".dice .img1").setAttribute("src" , "./dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
console.log("Person2 : " + randomNumber2);
document.querySelector(".dice .img2").setAttribute("src" , "./dice" + randomNumber2 + ".png");


if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Winner!";
    
    document.querySelector("h1").style.color = "yellow";

}