const skills=["HTML", "CSS", "Javascript", "Bootstrap"];
let slen= skills.length;
text ="<ul>";
for(let i=0; i<slen; i++){
    text +="<li>" + skills[i]  + "</li>" +"<br>";
}
text +="</ul>";
document.getElementById("js1").innerHTML= text;

function myFunction(){
    alert ("Let\'s be partners! How may I be of help? \n Enter your mail and \n Click on OK to send a mail");
}
function myRef(){
    alert("Referee is available on request.\n Thanks");
}