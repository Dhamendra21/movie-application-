
let API = 'https://www.omdbapi.com/?apikey=f0e27930&t='

let loadingstatus = false

function checkloadingsatus(){
  let intro = document.getElementById('intro')
 intro.style.display= 'none'
 let loader = document.getElementById('loader')
 if (loadingstatus == true){
  loader.classList.add('loader')
 }
 else{
  loader.classList.remove('loader')
 }

}
let poster = document.getElementById('poster')
let title = document.getElementById('title')
let year = document.getElementById('year')
let rating = document.getElementById('rating')
let country = document.getElementById('country')
let Released = document.getElementById('Released')
let Runtime = document.getElementById('Runtime')
let Genre = document.getElementById('Genre')
let Director = document.getElementById('Director')
let Writer = document.getElementById('Writer')
let Actors = document.getElementById('Actors')
let Plot = document.getElementById('Plot')
let Language = document.getElementById('Language')
let Awards = document.getElementById('Awards')
let Metascore = document.getElementById('Metascor')
let imdbRating = document.getElementById('imdbRat')
let Type = document.getElementById('Type')
let Website = document.getElementById('Website')
let imdbVotes = document.getElementById('imdbVotes')
function randermovie(data){

poster.src = data.Poster
title.innerText = data.Title
year.innerText = 'year :'+' '+ data.Year
rating.innerText = 'Rated :'+ ' ' + data.Rated
country.innerText =  'country :' + ' ' + data.Country
Released.innerText = 'Released :' + ' '+ data.Released
Runtime.innerText = 'Runtime :' + ' ' + data.Runtime
Genre.innerText = 'Genre :' + ' '+ data.Genre
Director.innerText = 'Director :' + ' ' + data.Director
Writer.innerText = 'Writer :' + ' ' + data.Writer
Actors.innerText = 'Actors :'+' ' + data.Actors
Plot.innerText = 'Plot :' + ' ' + data.Plot
Language.innerText = 'Language :'+ ' '+ data.Language
Awards.innerText = 'Awards :' + ' ' + data.Awards 
Metascore.innerText = 'Metascor :' + ' ' + data.Metascore
imdbRating.innerText =   data.imdbRating
imdbRating.classList.add('imdbRat')
Type.innerText = 'Type :' + ' ' + data.Type
Website.innerText = 'Website :' +' '+data.Website
imdbVotes.innerText = 'imdbVotes :' + ' '+ data.imdbVotes
 }
function fetchmoviedetails(){
  loadingstatus = true
  checkloadingsatus()
let moviename = document.getElementById('moviename')
let apiquery = API + moviename.value;
console.log(apiquery)

  fetch(apiquery).then((Response)=>{
    // console.log(Response)
    return Response.json();
  }).then((data)=>{
    console.log(data)
    loadingstatus= false
    checkloadingsatus()
randermovie(data)
  })
}





    