import GameCard from './GameCard';
import gameInfo from '../config/gamesInfo';


function DisplayGames(){

    return(
        <div className = "grid grid-cols-3 justify-items-center items-center gap-y-9 mt-20 portrait:grid-cols-1">
            {
                gameInfo.map(
                    (game,index)=>{
                        return(
                            <GameCard toshow = {game.toshow} heading ={game.heading} description = {game.description} 
                            primColor = {game.mainColor} secondColor = {game.secondColor} />
                        )
                    }
                )
            }
        </div>
    )
}

export default DisplayGames;