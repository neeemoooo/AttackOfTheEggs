import playerCharacterImage from "../assets/images/playerCharacter.png";
import playerCharacterLeftHand from "../assets/images/characterLeftHand.png";
import playerCharacterRightHand from "../assets/images/characterRightHand.png";

function PlayerCharacter(){
    return (
        <div>
            <img src={playerCharacterImage} alt=""/>
            <img src={playerCharacterLeftHand}  alt="" />
            <img src={playerCharacterRightHand}  alt="" />
        </div>
    );
}

export default PlayerCharacter;