
  /*var myFav = ["Monster","DeathNote","Code Geass"]

if ( myFav.includes(yourFavAnime)){

  alert("yes it is my fav too ")
  document.write("<h2>" + yourFavAnime + "</h2>")
  }

else if (yourFavAnime != null){
   document.write("<h2>" + yourFavAnime + "</h2>")
    }
else {
     alert("you didn't input anything")
    }
*/
function myFunction(){

var name = prompt("what is you name?")

alert("wlecome to my fav Anime website " + name + " :)")

var monster = "<div >" +
  "<h5>" + "Monster" + "</h5>" + "<img src='MA.jpg' alt='Image of Monster Anime' height='300px' width='300px'>" + "</div>"

var codeGeass = "<div >" +
  "<h5>" + "Code Geass" + "</h5>" + "<img src='CG.jpg' alt='Image of Code Geass' height='300px' width='300px'>" + "</div>"

var deathNote = "<div >" +
  "<h5>" + "Death Note"+ "</h5>" + "<img src='DT.jpg' alt='Image of Death Note' height='300px' width='300px'>" + "</div>"

var yourFav = prompt("what is your fav Anime ?\n(Monster),(Code Geass),(Death Note)")



while (yourFav != "Monster" && yourFav != "Code Geass" && yourFav != "Death Note") {
  yourFav = prompt("what is your fav Anime ?\n(Monster),(Code Geass),(Death Note)")
}

if (yourFav == "Monster") {
  var times = prompt("how many time you wish  to it on my page")
  document.writeln("you choose " + times + " Image")
  for (var i = 0; i < times; i++) {
    document.write(monster)
  }
} else if (yourFav == "Code Geass") {
  var times = prompt("how many time you wish  to it on my page ")
  for (var i = 0; i < times; i++) {
    document.write(codeGeass)
  }
} else if (yourFav == "Death Note") {
    var times = prompt("how many time you wish  to it on my page ")
    for (var i = 0; i < times; i++) {
      document.write(deathNote + times)
    }
}
}




