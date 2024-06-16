import GameCard from './GameCard';

import spotifyIm from '../assets/spotifyIm.jpg'; // songs
//movies
//words
//


function DisplayGames(){

    return(
        <div className = "grid grid-cols-3 justify-items-center items-center gap-3">
            <GameCard toshow= {spotifyIm}/>
            <GameCard toshow= {spotifyIm}/>
        </div>
    )
}

export default DisplayGames;