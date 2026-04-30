let data,employees;
function init(){
  $.ajaxSetup({async: false});
  

  let link = "https://studious-space-yodel-4jv74vxqqqvg3q56g-8500.app.github.dev/employeescustomers";
  let route ="/employeescustomers";
  employees = $.getJSON(link+route).responseJSON;
 generateCards(employees)
}



  function generateCards(employees){
  let centerpanel4 = document.getElementById("centerpanel4");
  let build ="";
  
    for(let i=0; i<employees.length; i++){
    let employee = employees[i]
    build += `<div class="card" >`
    build += `<h3> Song Name : ${employee.FirstName}</h3>`;
    build += `<div> Composer : ${employee.LastName}</div>`;
    build += `<div> Unitprice : ${employee.HireDate}</div>`;
    build += `<div> Genre Id : ${employee.Address}</div>`;
    build += `<hr>`;
    build += `</div>`;
  }
 centerpanel4.innerHTML = build;
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


