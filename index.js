// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance > 42){
    return distance-42;}

    if (distance < 42){
    return 42-distance;}

    }


function distanceFromHqInFeet(distance){    
    const distanceInFt= distanceFromHqInBlocks(distance)*264;
    return distanceInFt;
}

function distanceTravelledInFeet(start, destination){
    const distanceTravelled= distanceFromHqInFeet(destination)-distanceFromHqInFeet(start);
    return distanceTravelled;
}

function distanceTravelledInFeet(start, destination){
    if(start > destination){
    return ((start-destination)*264);
}
    if(start < destination){
    return ((destination-start)*264);
}
    if(destination < start){
        return distanceTravelled;

}
}

function calculatesFarePrice(start, destination){
    const distancetravlled= Math.abs((start-destination)*264);  

    if (distancetravlled <= 400){
        return 0;
}
    else if (distancetravlled > 400 && distancetravlled < 2000){
        return ((distancetravlled-400)*0.02);
}

   else if (distancetravlled >= 2000 && distancetravlled < 2500){       
        return 25;
}

    else if (distancetravlled > 2500){
        return 'cannot travel that far';
    }
}
