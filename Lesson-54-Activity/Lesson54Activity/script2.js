let data,tracks;
function init(){
  $.ajaxSetup({async: false});
  

  let link = "https://studious-space-yodel-4jv74vxqqqvg3q56g-8500.app.github.dev/tracksalbum";
  let route ="/tracksalbum";
  tracks = $.getJSON(link+route).responseJSON;
 generateCards(tracks)
}



  function generateCards(tracks){
  let centerpanel3 = document.getElementById("centerpanel3");
  let build ="";
  
    for(let i=0; i<tracks.length; i++){
    let track = tracks[i]
    build += `<div class="card" >`
    build += `<h3> Song Name : ${track.Name}</h3>`;
    build += `<div> Composer : ${track.Composer}</div>`;
    build += `<div> Unitprice : ${track.UnitPrice}</div>`;
    build += `<div> Genre Id : ${track.GenreId}</div>`;
    build += `<hr>`;
    build += `</div>`;
  }
 centerpanel3.innerHTML = build;
}

function filter(){
  let songs = document.getElementById("songs").value;
  console.log(songs);

  let songsList = []; //create a list of songs searched for
   
  for(let i=0; i<tracks.length;i++){
    let tracks = track[i] //get each sog
    //make sure the list is no
    if( track.songs == songs ) {
          //add to the new list
          songslist.push(track);
       }
  }
  console.log(`song found ${songslist.length}`)
  generateCards(songslist);
}


