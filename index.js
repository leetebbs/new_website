var i = 0;
var c = 0;
var txt = "</>TEBBO"; /* The text */
var textTwo =
  "If you are a business seeking a web presence or an employer looking to hire, you can contact me here.";
var speed = 0; /* The speed/duration of the effect in milliseconds */
var speedTwo = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  //document.getElementById("logo").innerHTML += txt;
  if (i < txt.length) {
    document.getElementById("logo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function second() {
  if (c < textTwo.length) {
    document.getElementById("secondText").innerHTML += textTwo.charAt(c);
    c++;
    setTimeout(second, speedTwo);
  }
}

typeWriter();

second();
