// random number generate for first dice//
var number=Math.random();
var randomNumber1=Math.floor(number*6)+1;

//random number generate for second dice//
var randomNumber2=Math.floor(Math.random()*6)+1;



var randomImageSource1="images/" + "dice" +randomNumber1 + ".png";
var randomImageSource2="images/" + "dice" +randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImageSource1);

document.querySelector(".img2").setAttribute("src",randomImageSource2 );

if ( randomNumber1 > randomNumber2){
     
    document.querySelector("h1").innerHTML="Player 1 win🤩";
}
else if(randomNumber1<randomNumber2){
    
    document.querySelector("h1").innerHTML="Player 2 win🥰";

}
else{
    document.querySelector("h1").innerHTML="Draw😣";
}