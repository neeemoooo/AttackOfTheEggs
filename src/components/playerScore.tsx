type PlayerScoreProps  = {
   playerScore:number; 
}
function PlayerScore({playerScore}:PlayerScoreProps) {
    return (
        <p className="text-2xl text-white">{playerScore}</p>
    );
}

export default PlayerScore;