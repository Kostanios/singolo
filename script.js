//&middot
//&bull



var dotArray = document.getElementsByClassName("dot");
var buttonArray = document.getElementsByClassName("menubuttons");


  buttonArray[1].onmouseover = function (){dotArray[0].innerHTML = "&bull; &#160; &#160;";}
  buttonArray[1].onmouseout = function(){dotArray[0].innerHTML = "&middot;	&#160; &#160;";}

  buttonArray[2].onmouseover = function (){dotArray[1].innerHTML = "&bull; &#160; &#160;";}
  buttonArray[2].onmouseout = function(){dotArray[1].innerHTML = "&middot;	&#160; &#160;";}

  buttonArray[3].onmouseover = function (){dotArray[2].innerHTML = "&bull; &#160; &#160;";}
  buttonArray[3].onmouseout = function(){dotArray[2].innerHTML = "&middot;	&#160; &#160;";}

  buttonArray[4].onmouseover = function (){dotArray[3].innerHTML = "&bull; &#160; &#160;";}
  buttonArray[4].onmouseout = function(){dotArray[3].innerHTML = "&middot;	&#160; &#160;";}
