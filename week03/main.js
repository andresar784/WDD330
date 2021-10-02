const d = new Date();

let x = document.getElementById("myBtn");
x.addEventListener("click", displayDate);
x.addEventListener("click", changeHTML);
x.addEventListener("mouseover", overButton);
x.addEventListener("mouseout", outButton);

function displayDate() {
  document.getElementById("timetest").innerHTML = d.toDateString();
}
function changeHTML(){
 document.getElementById("myBtn").innerHTML = 'Clicked!';
}
function overButton(){
  document.getElementById("myBtn").innerHTML = 'You are over the button!';
}
function outButton(){
  document.getElementById("myBtn").innerHTML = 'Try it';
}
