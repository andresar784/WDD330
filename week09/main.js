function myFunction() {
    alert("Hello! I am an alert box!");
  }

  function myFunction1() {
    confirm("Press a button!");
  }

  function myFunction2() {
    let person = prompt("Please enter your name", "Bro James");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
}

function myFunction3() {
    var x = "The language is "  + navigator.language + " and other things like if you are online or not (true or false): " + navigator.onLine;
    document.getElementById("demo1").innerHTML = x;
  }
  
function myFunction4() {
    var x = "The protocol is: "  + location.protocol + ", the pathname: " + location.pathname + " among other useful things.." ;
    document.getElementById("demo2").innerHTML = x;
  }

  function myFunction5() {
    var x = "The history of your browser is, how many pages you visited: "  + history.length; 
    document.getElementById("demo3").innerHTML = x;
  }

  function myFunction6() {
    const popup = window.open('https://abn.churchofjesuschrist.org/study/general-conference/2021/10/11nelson?lang=eng', 'Pte Monson message','width=800,height=600,resizable=yes');
    document.getElementById("demo3").innerHTML = x;
  }

  function myFunction7() {
    let x =  "The height of you screen is: " + screen.height + ", the widht is: " + screen.width + ", the color depth is: " + screen.colorDepth;
    document.getElementById("demo5").innerHTML = x;
  }

  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }
//first
const squareElement = document.getElementById('square');
let angle = 0;

setInterval( () => {
angle = (angle + 2) % 360;
squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);

//second 
const squareElement1 = document.getElementById('square1');
let angle1 = 0;

function rotate() {
angle1 = (angle1 + 2)%360;
squareElement1.style.transform = `rotate(${angle1}deg)`
window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);
