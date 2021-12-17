let API_KEY = "62b6b4eebfc641ac3280ea8a2e571025";
const list = document.getElementById("list");


async function getData() {
   try {
      let apiUrl = "https://api.themoviedb.org/3/genre/movie/list";
      let res = await fetch(apiUrl + "?api_key=" + API_KEY)
      let moviesTypes = await res.json();
      moviesTypes.genres.map(item => {
         newLi = document.createElement("li");
         newLi.style.fontSize = "28px";
         newLi.style.fontWeight = "600"
         newLi.innerHTML = "genre naam:" + item.name + ", id:" + item.id;

         list.appendChild(newLi)
      })

   }
   catch (err) {
      console.log(err)
   }
}


const topRatedMovies = document.getElementById("topRatedMovies")

async function getTopRatedMovies(){
   const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + API_KEY + "&language=en-US&page=1")
   const json = await res.json();
   json.results.map(item => {
     let nliItem = document.createElement("li");
      nliItem.innerHTML = item.original_title;
      topRatedMovies.appendChild(nliItem)
   })
}


getTopRatedMovies()


const topMovie = document.getElementById("topMovie");


async function myTopMovie() {
   const urlMovie = "https://api.themoviedb.org/3/find/tt6105098?api_key=" + API_KEY + "&language=en-US&external_source=imdb_id"
   const res = await fetch(urlMovie)
   const data = await res.json();
   topMovie.innerHTML = data.movie_results[0].original_title
}

myTopMovie()


const bestRateList = document.getElementById("bestRate")

async function getTopRatedActionMovies() {
   const urlTopRatedActionMovies = "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&language=en-US&vote_average.gte=8&with_genres=action"
   const res = await fetch(urlTopRatedActionMovies)
   const data = await res.json();
   console.log(data.results)
   data.results.map(movie => {
      newLiItem = document.createElement("li");
      newLiItem.innerHTML = movie.original_title;

      newLiItem.style.fontSize = "23px";
      newLiItem.style.fontWeight = "600"
      bestRateList.appendChild(newLiItem)
   })
}

getTopRatedActionMovies()



const fromYear1 = document.getElementById("fromYear")
async function fromYear(){
   const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&primary_release_date.gte=1975")
   const data = await res.json();
   data.results.map(item => {
      const newListItem = document.createElement("li");
      newListItem.innerHTML = item.original_title;
      fromYear1.appendChild(newListItem)
   })
}

fromYear()