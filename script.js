

var chevArray = document.getElementsByClassName("sensor");
var dotArray = document.getElementsByClassName("dot");
var buttonArray = document.getElementsByClassName("menubuttons");
var container = document.getElementsByClassName("container")[0];
var slides = document.getElementsByClassName("slide");



var firstsvipers = document.getElementsByClassName("firstSlideChevleft");
var secondsvipers = document.getElementsByClassName("secondSlideChevleft");
var sliderbottom = document.getElementsByClassName("sliderbottom")[0];
var transporter = document.getElementsByClassName("transporter")[0];

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
