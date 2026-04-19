
let tracks;
function init(){
  $.ajaxSetup({async: false});
  

  let link = "https://stunning-spork-q74qr4wv7rvjh4rjg-8500.app.github.dev/tracksalbum";
  let route= "/tracksalbum"
  tracks = $.getJSON(link+route).responseJSON;

  generateCards(tracks)

 
}

function  generateCards(tracks){
  let output = document.getElementById("output");
  let build ="";
  for(let i=0;  i<tracks.length; i++){
 let track = tracks[i];
 build += `<div class="card">`
 build +=  `  <h3> Tracks name : ${track.Name}</h3>`;
 build +=  ` <div> Title : ${track.Title}</div>`;
 build +=  ` <div> Composer : ${track.Composer}</div>`;
 build += `<hr>`;
 build +=`</div>`;
}

output.innerHTML = build;



}




















