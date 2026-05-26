let data,Members;

  async function init(){
  let link = "https://studious-space-yodel-4jv74vxqqqvg3q56g-8500.app.github.dev/Members";
  let route= "/Members"
  info = await fetch(link+route);
  data = await info.json();
  console.log(data);
  generatecards(data);
}

function generatecards(Members){
  let centerpanel = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<Members.length; i++){
    let Member = Members[i]
    build += `<div class="card" >`
    build += `<h3> Customer ID : ${Member.Name}</h3>`;
    build += `<div> First Name : ${Member.Numbergamebought}</div>`;
    build += `<div> Last Name : ${Member.Age}</div>`;
    build += `<div> Country : ${Member.Paymenttype}</div>`;
    build += `<p> Email : ${Member.Gmail}</p>`;
    build += `<hr>`;
    build += `</div>`;
  }

  // Now inject the build content into the output container
  centerpanel.innerHTML = build;
  

}
