import GameCard from './GameCard';
import gameInfo from '../config/gamesInfo';


function DisplayGames(props){
    let filteredList = gameInfo.filter(
        (game)=>{
            const searchContent = props.filterContent.toUpperCase().split(' ');
            return(
                (
                    (game.heading && searchContent.some(word=>game.heading.toUpperCase().includes(word))) ||
                    (game.description && searchContent.some(word=>game.description.toUpperCase().includes(word)))
                )
            )
        }
    )
    return(
        <div className = "grid grid-cols-3 justify-items-center items-center gap-y-9 mt-20 portrait:grid-cols-1 portrait:mt-5">
            {
                filteredList.map(
                    (game,index)=>{
                        return(
                            <GameCard toshow = {game.toshow} heading ={game.heading} description = {game.description} 
                            primColor = {game.mainColor} secondColor = {game.secondColor} updateContent = {props.UpdateContent} setVanillaWord = {props.setVanillaWord1}
                            setSongJSON = {props.setSongJSON1} pathStr = {game.pathStr} key  ={'game'+index} />
                        )
                    }
                )
            }
        </div>
    )
}

export default DisplayGames;