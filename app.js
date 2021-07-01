var name = prompt("what is you name?")
console.log(name)

alert("wlecome to my fav Anime website " + name + " :)" )

var yourFavAnime = prompt("what is your fav Anime ?")

console.log(yourFavAnime)

var myFav = ["Monster","DeathNote","Code Geass"]

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


///////////////////////////////////////////////////////////////

var monster = <div >
        <h5>Monster</h5>
        <img src="MA.jpg" alt="Image of Monster Anime" height="300px" width="300px">
      </div>

var codeGeass = <div>
        <h5>Code Geass: Lelouch of the Rebellion</h5>
        <img src="CG.jpg" alt="Image of Code Geass Anime" height="300px" width="300px">
      </div>

var deathNote = <div>
        <h5>Death Note</h5>
        <img src="DT.jpg" alt="Image of Death Note Anime" height="300px" width="300px">
      </div>


var yourFav = prompt("what is your fav Anime ?\n(Monster),(Code Geass),(Death Note)")

while (yourFav != "Monster" && yourFav != "Code Geass" && yourFav != "Death Note" ){
  
}

