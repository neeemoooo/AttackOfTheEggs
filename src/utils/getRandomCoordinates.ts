type Coordinates = {
    x:number;
}
function getRandomCoordinates():Coordinates {
    const randomNumber:number =  Math.floor(Math.random() * 100);
    return {
        x:randomNumber,
    } 
}

export {getRandomCoordinates};