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
  {
    label: "Week04",
    url: "week04/index.html"
  },
  {
    label: "Week05",
    url: "week05/index.html"
  },
  {
    label: "Week06",
    url: "week06/index.html"
  },
  {
    label: "Week07",
    url: "week07/index.html"
  },
  {
    label: "Week08",
    url: "week08/index.html"
  },
  {
    label: "Week09",
    url: "week09/index.html"
  },
  {
    label: "Week10",
    url: "week10/index.html"
  },
  {
    label: "Final Project",
    url: "finalproject/index.html"
  },
  
]


const list = document.getElementById("weeklist");

for (let i=0; i < links.length; i++){
  
        let listitems = document.createElement("li");
        let anchor = document.createElement("a");
        let label = document.createElement("label");  
  
        anchor.setAttribute("href", links[i].url);
        label.innerHTML = links[i].label;
                
        listitems.appendChild(anchor);
        anchor.appendChild(label);
        list.appendChild(listitems);
}

