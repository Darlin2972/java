// Data contain the Game name, image file name and description.
  let data = [
  {name:"Risk of Rain 2",img:"Riskofrain2.jpg",Genre:"Action Roguelike",description:"Escape a chaotic alien planet fighting hordes of monsters."},
  
  {name:"Call of Duty: Black Ops III",img:".png",Genre:"FPS Shooter",description:"Cinematic campaign and intense multiplayer battles.."},
  
  {name:"Titanfall 2",img:"blackpanther.jpg",Genre:"Sci‑Fi Shooter",description:"Fast-paced combat with pilots and mechs."},
  
  {name:"Grand Theft Auto V",img:"blackpanther.jpg",Genre:"Open World Action",description:"Explore a massive open-world city full of missions."},

  {name:"Minecraft",img:"blackpanther.jpg",Genre:"Sandbox Survival",description:"Build, explore, and survive in blocky worlds."},

  {name:"Hades",img:"blackpanther.jpg",Genre:"Action Roguelike",description:"Battle through the Underworld in a fast roguelike."},

  {name:"Stardew Valley",img:"blackpanther.jpg",Genre:"Farming Sim",description:"Farm, fish, mine, and build relationships."},

  {name:"Baldurs Gate 3",img:"blackpanther.jpg",Genre:"Farming Sim",description:"Farm, fish, mine, and build relationships."},
  
  {name:"Subnautica",img:"blackpanther.jpg",Genre:"Survival Adventure",description:"Explore and survive in an alien ocean."},

  {name:"Phasmophobia",img:"blackpanther.jpg",Genre:"Horror Co‑op",description:"Hunt ghosts with paranormal tools."},

  {name:"Terraria",img:"blackpanther.jpg",Genre:"Sandbox Adventure",description:"Explore, craft, and fight in a 2D world."},

  {name:"Elden Ring",img:"blackpanther.jpg",Genre:"Action RPG",description:"Explore a vast open world full of danger."},

  {name:"Cyberpunk 2077",img:"blackpanther.jpg",Genre:"Open World RPG",description:"Futuristic open-world RPG with deep story."},
  
  {name:"Red Dead Redemption 2",img:"blackpanther.jpg",Genre:"Open World Action",description:"Epic western adventure with open-world freedom."},

  {name:"Apex Legends",img:"blackpanther.jpg",Genre:"Battle Royale",description:"Hero-based battle royale shooter."},

  {name:"Dota 2",img:"",Genre:"MOBA",description:"5v5 competitive MOBA battles."},

  {name:"Counter‑Strike 2",img:"",Genre:"FPS Shooter",description:"Tactical 5v5 competitive shooter."},

  {name:"Valorant",img:"",Genre:"Tactical Shooter",description:"Hero-based tactical shooter."},

  {name:"Team Fortress 2",img:"",Genre:"FPS Shooter",description:"Class-based team shooter."},

  {name:"Warframe",img:"",Genre:"Sci‑Fi Shooter",description:"Fast co‑op looter shooter."},

  {name:"Destiny 2",img:"",Genre:"FPS MMO",description:"Online looter shooter with raids."},

  {name:"Rust",img:"",Genre:"Survival PvP",description:"Survive, build, and raid in a harsh world."},

  {name:"The Forest",img:"",Genre:"Survival Horror",description:"Survive cannibals on a remote island."},

  {name:"Sons of the Forest",img:"",Genre:"Survival Horror",description:"Survive and build in a dangerous forest."},

  {name:"ARK: Survival Evolved",img:"",Genre:"Survival Sandbox",description:"Survive dinosaurs and build bases."},

  {name:"No Mans Sky",img:"",Genre:"Space Exploration",description:"Explore infinite planets and galaxies."},

  {name:"Euro Truck Simulator 2",img:"",Genre:"Driving Sim",description:"Drive trucks across Europe."},

  {name:"American Truck Simulator",img:"",Genre:"Driving Sim",description:"Drive trucks across the U.S."},

  {name:"Cities: Skylines II",img:"",Genre:"City Builder",description:"Build and manage a growing city."},

  {name:"Factorio",img:"",Genre:"Automation Sim",description:"Build automated factories and defend them."},
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

