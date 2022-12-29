var randomNumber1;
 randomNumber1=Math.floor(Math.random() * 6 +1);
var diceRndmImg=("dice"+randomNumber1+".png");
var diceFinalRndmImg=("images/" + diceRndmImg);
var select=document.querySelectorAll("img")[0];
select.setAttribute("src",diceFinalRndmImg);
var randomNumber2=Math.floor(Math.random()*6+1);
var diceRndmImg2=("dice"+randomNumber2+".png");
var diceFinalRndmImg2=("images/"+diceRndmImg2);
var select2=document.querySelectorAll("img")[1];
select2.setAttribute("src",diceFinalRndmImg2);
var h1=document.getElementById("heading");


if(randomNumber1>randomNumber2){
    h1.innerHTML="😎Player 1 wins";
}
else if(randomNumber1===randomNumber2){
    h1.innerHTML="✅Draw✅";
}
else{
    h1.innerHTML="Player 2 wins😎";
}

