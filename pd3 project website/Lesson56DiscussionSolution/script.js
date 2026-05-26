
let Data,Games;

async function init(){
  let link = "https://studious-space-yodel-4jv74vxqqqvg3q56g-8500.app.github.dev/Games";
  let route= ""
  info = await fetch(link+route);
  Data = await info.json();
  console.log(Data);
  generatecards(Data);
  }

 function generatecards(Games){ 
  let back="";
  let front="";
  
  for(let i=0; i<Games.length; i++){
    let Game = Games[i];
    front = `<h2>${Game.GameTitle}</h2>`;
    front += `<img src='Images/${Game.Images}.jpg'>`

    back = `<p>${Game.Description}</p>`;
    back+= `<p>${Game.Genre}</p>`;
    back+= `<p>${Game.AgeRating}</p>`;
    back+= `<p>${Game.Price}</p>`;
    back+= `<hr>`;

    card = new FlipCard(front,back);
    card.render("flipcard_output");
  }
}
