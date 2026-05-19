
// Data contain the Game name, image file name and description.
  let data = [
  {name:"Risk of Rain 2",img:"hulk.png",description:"Escape a chaotic alien planet fighting hordes of monsters."},
  
  {name:"IRONMAN",img:"ironman.png",description:"Iron Man is a superhero appearing in American comic books published by Marvel Comics."},
  
  {name:"BLACK PANTHER",img:"blackpanther.jpg",description:"T'Challa is the king of Wakanda, the secretive and highly advanced African nation, as well as the powerful warrior known as the Black Panther."},
  ]


/*
Problem 

Using the array of JSON called data above which includes the name, image file name and description to build a flip card for each hero.

Have the front of the card display the image of the hero and the back of the card display the name as a header and a description below it.

Add the card to the container "flipcard_output"
*/
window.onload = function(){  
  

  let back="";
  let front="";
  
  for(let i=0; i<data.length; i++){
    let games = data[i];
    front = `<img src='images/${games.img}'>`;

    back = `<h2>${games.name}</h2>`;
    back+= `<p>${games.description}</p>`;
    back+= `<hr>`;

    card = new FlipCard(front,back);
    card.render("flipcard_output");
  }

 
}
