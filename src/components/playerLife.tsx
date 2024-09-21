import heart from "../assets/images/heart.png";

type PlayerLifeProps = {
    playerLife:number;
}

function PlayerLife({playerLife}:PlayerLifeProps) {
    return (
        <p className="flex gap-x-4 text-2xl text-white">
          <img src={heart} alt="" height={30} width={31} />
           <span className="font-2xl">{playerLife}</span> 
        </p> 
    );
}

export default PlayerLife;