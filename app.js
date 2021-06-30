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