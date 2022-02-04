var player = {
    playername:" Kevin De Bruyne",
    age: 32,
    team:"Man city",
    img: "images.jpg",
    positon:"Attacking mid"
}
var manager = {
    managername:" Pep",
    age: 53,
    team:"Man city",
    job:"Manager",
    img:"1196991616.jpg"
}
var a = "";
var d = "";
var b = document.getElementById("player_ifo"); 
var c = document.getElementById("manager_ifo"); 

document.getElementById("manager_pic").src = manager.img;
document.getElementById("player_pic").src = player.img;

d += "Manager name: " + manager.managername + "<br>";
d += "Age: " + manager.age + "<br>";
d += "Club: " + manager.team + "<br>";
d += "Job: " + manager.job;

a += "Name of player: " + player.playername + "<br>";
a += "Age: " + player.age + "<br>";
a += "Club: " + player.team + "<br>";
a += "positon: " + player.positon;

document.body.innerHTML += a;
document.getElementById("manager_ifo").innerHTML += d; 
