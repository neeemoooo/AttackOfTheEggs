type Difficulties = ["easy", "medium", "hard"];

type GameDifficultyProps = {
 setDifficulty:(difficulty:number) => void;
}

function GameDifficulty({setDifficulty}:GameDifficultyProps) {
  const GameDifficulty: Difficulties = ["easy", "medium", "hard"];
  const handleChangeDifficulty = (event:React.ChangeEvent<HTMLSelectElement>) =>{ 
    const difficultyType = event.target.value;
    const difficultyNewValue = (difficultyType === "easy") ? 1000 : (difficultyType === "normal") ? 800 : 600;
    setDifficulty(difficultyNewValue);
  }
  return (
    <select onChange={handleChangeDifficulty}>
      {GameDifficulty.map((difficulty) => (
        <option key={difficulty} value={difficulty}>
          {difficulty}
        </option>
      ))}
    </select>
  );
}

export default GameDifficulty;