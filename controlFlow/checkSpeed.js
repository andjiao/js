//speed limit =70
//5->1 point
//math.floor(1.3)
//12 point ->suspended

checkSpeed(50);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPrPoint =5;
if(speed<=speedLimit + kmPrPoint){
    console.log('ok');

    //with the return we jump out of the function and none underneath we be executed, so no need for an else
    return;
}
const points = Math.floor((speed-speedLimit)/kmPrPoint);
if(points>=12)
console.log('License suspended');
else
console.log('Points', points);
}