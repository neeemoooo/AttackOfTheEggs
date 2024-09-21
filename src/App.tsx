import React, { useEffect, useRef, useState } from "react";
import GameInfoOptions from "./components/gameInfoOptions";
import LeaderBoard from "./components/leaderBoard";
import PlayerCharacter from "./components/playerCharacter";
import EggMonster from "./components/egg";
import { getRandomLetters } from "./utils/getRandomLetters";

type Egg =  {
  id:string;
  letter:string; 
}

function App() {
  const [eggs,setEggs] = useState<Egg[]>([]);
  const [difficulty,setDifficulty] = useState<number>(1000);
  const [score,setScore] = useState<number>(0);
  const [life,setLife] = useState<number>(0);
  const canvas = useRef(null);
  const timerIdRef = useRef<number | undefined>(undefined);

  const keyDownEvent = ():void => {
    console.log("hello world");
  }

  useEffect(() => { 
    document.addEventListener("keydown",keyDownEvent);
    return () => document.removeEventListener("keydown",keyDownEvent);
  },[]);

  useEffect(() => {
    timerIdRef.current = setInterval(():void => { 
      const newEggsLetter = getRandomLetters();
      const newEggId = crypto.randomUUID();
      const newEggInfo:Egg = {
        id:newEggId,
        letter:newEggsLetter,
      }
      setEggs(eggs => [...eggs,newEggInfo]);
    },difficulty);

    return () => clearInterval(timerIdRef.current);
  },[difficulty]);

  return (
    <div className="min-h-[100vh] relative overflow-hidden bg-mainBg bg-cover bg-no-repeat bg-center">       
      <GameInfoOptions setDifficulty={setDifficulty} playerScore={score} playerLife={life}  /> 
      <main ref={canvas} className="flex flex-col">
        <LeaderBoard />
        <PlayerCharacter /> 
        {eggs.map(egg => <EggMonster key={egg.id} targetLetter={egg.letter} />)}
      </main>
    </div>
  )
}

export default App;