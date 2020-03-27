



var chevArray = document.getElementsByClassName("sensor");
var dotArray = document.getElementsByClassName("dot");
var buttonArray = document.getElementsByClassName("menubuttons");
var container = document.getElementsByClassName("container")[0];


var firstsvipers = document.getElementsByClassName("firstSlideChevleft");
var secondsvipers = document.getElementsByClassName("secondSlideChevleft");
var sliderbottom = document.getElementsByClassName("sliderbottom")[0];
var transporter = document.getElementsByClassName("transporter")[0];
var VecticalIphoneBottomSensor = document.getElementById("buttoncircleverticalsensor");
var screenvertical = document.getElementById("screenvertical");
var HorizontalIphoneBottomSensor = document.getElementById("buttoncirclehorizontalsensor")
var screenhorozontal = document.getElementById("screenhorizontal");
var verticalonoff = true;
var horizontalonoff = true;

VecticalIphoneBottomSensor.onclick = function(){
  if(verticalonoff){
    screenvertical.hidden = true;
    verticalonoff = false;
  }
  else{
    screenvertical.hidden = false;
    verticalonoff = true;}
}

HorizontalIphoneBottomSensor.onclick = function(){
  if(horizontalonoff){
    screenhorozontal.hidden = true;
    horizontalonoff = false;
  }
  else{
    screenhorozontal.hidden = false;
    horizontalonoff = true;}
}

var slideNumber = 1;

  chevArray[0].onclick = function(){
    if(slideNumber == 1){
      transporter.style.transition = "none";
      transporter.style.transform ="translateX(0%)"

      slideNumber = 0;
      container.style.backgroundColor = "#648BF0";
      sliderbottom.style.backgroundColor ="#4548ca";
      firstsvipers[0].style.display ="none";
      firstsvipers[1].style.display ="none";
      secondsvipers[0].style.display ="block";
      secondsvipers[1].style.display ="block";

      transporter.style.transition = "transform 0.6s ease";
      transporter.style.transform ="translateX(33%)"
    }
    else{
      transporter.style.transition = "none";
      transporter.style.transform ="translateX(-33%)"

      slideNumber = 1;
      container.style.backgroundColor = "#f06c64";
      sliderbottom.style.backgroundColor ="#ea676b";
      firstsvipers[0].style.display ="block";
      firstsvipers[1].style.display ="block";
      secondsvipers[0].style.display ="none";
      secondsvipers[1].style.display ="none";

      transporter.style.transition = "transform 0.6s ease";
      transporter.style.transform ="translateX(0%)"
    }
  } 
  chevArray[1].onclick = function(){
    if(slideNumber){
      transporter.style.transition = "none";
      transporter.style.transform ="translateX(0%)"

      slideNumber = 0;
      sliderbottom.style.backgroundColor ="#4548ca";
      container.style.backgroundColor = "#648BF0";
      firstsvipers[0].style.display ="none";
      firstsvipers[1].style.display ="none";
      secondsvipers[0].style.display ="block";
      secondsvipers[1].style.display ="block";

      transporter.style.transition = "transform 0.6s ease";
      transporter.style.transform ="translateX(-33%)"
    }
    else{
      transporter.style.transition = "none";
      transporter.style.transform ="translateX(33%)"
      
      slideNumber = 1;
      container.style.backgroundColor = "#f06c64";
      sliderbottom.style.backgroundColor ="#ea676b";
      firstsvipers[0].style.display ="block";
      firstsvipers[1].style.display ="block";
      secondsvipers[0].style.display ="none";
      secondsvipers[1].style.display ="none";

      transporter.style.transition = "transform 0.6s ease";
      transporter.style.transform ="translateX(0%)"
    }
  }

  buttonArray[1].onmouseover = function (){dotArray[0].innerHTML = "&bull; &#160; &#160;";}
  buttonArray[1].onmouseout = function(){dotArray[0].innerHTML = "&middot;	&#160; &#160;";}

  buttonArray[2].onmouseover = function (){dotArray[1].innerHTML = "&bull; &#160; &#160;";}
  buttonArray[2].onmouseout = function(){dotArray[1].innerHTML = "&middot;	&#160; &#160;";}

  buttonArray[3].onmouseover = function (){dotArray[2].innerHTML = "&bull; &#160; &#160;";}
  buttonArray[3].onmouseout = function(){dotArray[2].innerHTML = "&middot;	&#160; &#160;";}

  buttonArray[4].onmouseover = function (){dotArray[3].innerHTML = "&bull; &#160; &#160;";}
  buttonArray[4].onmouseout = function(){dotArray[3].innerHTML = "&middot;	&#160; &#160;";}

  var imgs = document.getElementsByClassName("img");

  imgs[0].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[0].style.transform ="translateY("+randomY+"%)";
  }
  imgs[1].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[1].style.transform ="translateY("+randomY+"%)";
  }
  imgs[2].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[2].style.transform ="translateY("+randomY+"%)";
  }
  imgs[3].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[3].style.transform ="translateY("+randomY+"%)";
  }
  imgs[4].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[4].style.transform ="translateY("+randomY+"%)";
  }
  imgs[5].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[5].style.transform ="translateY("+randomY+"%)";
  }
  imgs[6].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[6].style.transform ="translateY("+randomY+"%)";
  }
  imgs[7].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[7].style.transform ="translateY("+randomY+"%)";
  }
  imgs[8].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[8].style.transform ="translateY("+randomY+"%)";
  }
  imgs[9].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[9].style.transform ="translateY("+randomY+"%)";
  }
  imgs[10].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[10].style.transform ="translateY("+randomY+"%)";
  }
  imgs[11].onclick = function(){
    let randomY = (Math.random()-0.5)*10;
    imgs[11].style.transform ="translateY("+randomY+"%)";
  }
  
  var portfolioButtons = document.getElementsByClassName("menuButton");
  var active = portfolioButtons[0];
  portfolioButtons[0].onclick = function(){
    active.style.color = "#767e9e"
    active.style.border ="1px solid #666d89"
    portfolioButtons[0].style.color = "#dedede"
    portfolioButtons[0].style.border = "1px solid #c5c5c5"
    active = portfolioButtons[0]
  }
  portfolioButtons[1].onclick = function(){
    active.style.color = "#767e9e"
    active.style.border ="1px solid #666d89"
    portfolioButtons[1].style.color = "#dedede"
    portfolioButtons[1].style.border = "1px solid #c5c5c5"
    active = portfolioButtons[1]
  }
  portfolioButtons[2].onclick = function(){
    active.style.color = "#767e9e"
    active.style.border ="1px solid #666d89"
    portfolioButtons[2].style.color = "#dedede"
    portfolioButtons[2].style.border = "1px solid #c5c5c5"
    active = portfolioButtons[2]
  }
  portfolioButtons[3].onclick = function(){
    active.style.color = "#767e9e"
    active.style.border ="1px solid #666d89"
    portfolioButtons[3].style.color = "#dedede"
    portfolioButtons[3].style.border = "1px solid #c5c5c5"
    active = portfolioButtons[3]
  }
