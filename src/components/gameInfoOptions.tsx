import GameDifficulty from "./gameDifficulty";
import PlayerLife from "./playerLife";
import PlayerScore from "./playerScore";

type GameInfoOptionsTypes = {    
 setDifficulty:(difficulty:number) => void;
 playerScore:number;
 playerLife:number;
}

function GameInfoOptions(props:GameInfoOptionsTypes){
    return (
        <header className="p-8 flex justify-between">
            <GameDifficulty setDifficulty={props.setDifficulty} />
            <PlayerScore playerScore={props.playerScore} />
            <PlayerLife playerLife={props.playerLife} />
        </header>
    );
}

export default GameInfoOptions;