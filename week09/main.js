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



