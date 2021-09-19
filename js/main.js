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
    label: "Week01",
    url: "week01/index.html"
  },
]

const list = document.getElementById("weeklist");

for (let i=0; i<links.length; i++)
    {
        let listitems = document.createElement("li");
        let anchor = document.createElement("a");
        let label = document.createElement("label");
      
        anchor.setAttribute("href", links[i].url);
        listitems.appendChild(anchor);
        list.appendChild(listitems);
        list.setAttribute("label", links[i].label);
    }

