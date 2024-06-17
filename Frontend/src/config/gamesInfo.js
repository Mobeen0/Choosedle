import spotifyIm from '../assets/spotifyIm.jpg'; // songs
import netflixIm from '../assets/netflixIm.jpg'; // shows
import imdbIm from '../assets/imdbIm.jpg'; //movies
import wordleIm from '../assets/wordleIm.jpg'//words
//


let clientInfo =[
    {
        toshow: spotifyIm,
        heading: "Songs-Wordle",
        description:"Guess the song title in 6 attempts or less! Identify the hidden song from a mix of genres, artists and even albums.",
        mainColor: "#1db954",
        secondColor: "#191414"
    },
    {
        toshow: netflixIm,
        heading: "TV-Shows-Wordle",
        description:"Lights, camera, guess! Try to solve the TV show title in 6 attempts or less, from sitcoms to dramas and everything in between.",
        mainColor: "#e50914",
        secondColor: "#221f1f"
    },
    {
        toshow: imdbIm,
        heading: "Movies-Wordle",
        description:"The big screen is calling! Guess the movie title in 6 attempts or less, from classics to blockbusters to mysteries and more.",
        mainColor: "#f5de50",
        secondColor: "#000000"
    },
    {
        toshow: wordleIm,
        heading: "Vanilla-Wordle",
        description:"The original word-guessing game! Try to solve the 5-letter word in 6 attempts or less, testing your vocabulary and logic.",
        mainColor: "#808080",
        secondColor: "#000000"
    }
]

export default clientInfo;