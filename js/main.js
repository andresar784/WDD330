const links = [
  {
    label: "Week01",
    url: "week01/index.html"
  },
  {
    label: "Week02",
    url: "week02/index.html"
  },
  {
    label: "Week03",
    url: "week03/index.html"
  },
  
]

const list = document.getElementById("weeklist");

for (let i=0; i<links.length; i++){
  
        let listitems = document.createElement("li");
        let anchor = document.createElement("a");
        let label = document.createElement("label");  
  
        anchor.setAttribute("href", links[i].url);
        label.innerHTML = links[i].label;
                
        listitems.appendChild(anchor);
        anchor.appendChild(label);
        list.appendChild(listitems);
}

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
