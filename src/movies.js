// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data")


function getAllDirectors(arr) {
  let allDirectors = arr.map(movie => movie.director)
  return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
  return arr.filter((movie) => {
    return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  })
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  let sum = arr.reduce((acc, val) => {
    return acc + val.score;

  },0) 
  let avg = sum / arr.length;
  return Number(avg.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
 function dramaMoviesScore(arr) {
    let dramas = arr.filter((eachMovie) => {
    return eachMovie.genre.includes("Drama")
  })
  return scoresAverage(dramas)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  return arr.sort((a,b) => a.year - b.year)
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let result = arr.sort((a,b) => {
    if (a.title > b.title){
      return 1
    }
    if (a.title < b.title){
      return -1
    }
    if (a.title == b.title){
      return 0
    }
  })
  return result.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {  
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
