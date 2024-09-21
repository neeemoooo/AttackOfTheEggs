import { forwardRef, useEffect, useState } from "react";
import eggMonsterImage from "../assets/images/eggMonster.png";
import { getRandomCoordinates } from "../utils/getRandomCoordinates";

type EggMonsterProps = { 
    targetLetter:string;
}

type EggPositionProps = {
    positionX:number;
}

const EggMonster = forwardRef<HTMLDivElement,EggMonsterProps>(function EggMonster({targetLetter},ref){
    const [eggPosition,setEggPosition] = useState<EggPositionProps>({positionX:0});

    useEffect(() => {
        setEggPosition({positionX:getRandomCoordinates().x});
    },[]);

    return (        
        <div ref={ref} className={`falling-egg flex flex-col items-center justify-center`} style={{left:`${eggPosition.positionX}%`}} >
            <button className="py-4 px-5 text-white text-2xl rounded-full border-2 border-red-700 flex items-center justify-center bg-gradient-to-l from-[#151515] to-[#585858] translate-y-1">{targetLetter}</button> 
            <img src={eggMonsterImage} alt="" height={130} width={100} />
        </div> 
    );
});

export default EggMonster;