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
        let img = document.createElement("img");
        

        
        anchor.setAttribute("href", links[i].url);
        img.setAttribute("src", links[i].image);
        img.setAttribute("class", "pressed");
        
        listitems.appendChild(anchor);
        anchor.appendChild(img);
        list.appendChild(listitems);
        
        
    }

