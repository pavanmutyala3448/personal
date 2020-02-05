
  var randomNumber1=Math.random();
  randomNumber1=Math.floor(randomNumber1*6) +1 ;
  var randomDiceImage="dice"+randomNumber1+".png";
  var randomDiceSource="images/"+randomDiceImage;
  var img1=document.querySelectorAll('img')[0];
  img1.setAttribute("src",randomDiceSource);
// img 2

  var randomNumber2=Math.random();
  randomNumber2=Math.floor(randomNumber2*6) +1 ;
  var randomDiceImage2="dice"+randomNumber2+".png";
  var randomDiceSource2="images/"+randomDiceImage2;
  var img2=document.querySelectorAll('img')[1];
  img2.setAttribute("src",randomDiceSource2);
if(randomNumber1 > randomNumber2)
{
  document.querySelector('h1').innerHTML="🚩 player 1 is win";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector('h1').innerHTML="player 2 is win 🚩";
}
else{
  document.querySelector('h1').innerHTML="Match is draw 🤝";
}
