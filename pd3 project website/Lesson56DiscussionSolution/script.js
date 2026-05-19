
// Data contain the hero name, image file name and description.
let data,Games;

/*
Problem 

Using the array of JSON called data above which includes the name, image file name and description to build a flip card for each hero.

Have the front of the card display the image of the hero and the back of the card display the name as a header and a description below it.

Add the card to the container "flipcard_output"
*/
  async function init(){
  let Games = "https://studious-space-yodel-4jv74vxqqqvg3q56g-8500.app.github.dev/Games";
  let route= "/Games"
  info = await fetch(link+route);
  data = await info.json();
  console.log(data);


  let back="";
  let front="";
  
  for(let i=0; i<Games.length; i++){
    let Game = Games[i];
    front = `<img src='images/${Game.img}'>`;
    back = `<h2>${Game.GameTitle}</h2>`;
    back+= `<p>${Game.Description}</p>`;
    back+= `<p>${Game.Genre}</p>`;
    back+= `<p>${Game.AgeRating}</p>`;
    back+= `<p>${Game.Price}</p>`;
    back+= `<hr>`;

    card = new FlipCard(front,back);
    card.render("flipcard_output");
  }

 
}
