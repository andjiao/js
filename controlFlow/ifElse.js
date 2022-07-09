//hour
//if hour is btw 6am and 12 pm: good morning
//if it is btw 12 and 6: good afternoon
//otherwise: good evening

let hour=10;

if(hour>=6 && hour<12){
    console.log('good morning');
}
else if(hour>=12 && hour<18){
    console.log('good afternoon');
}
else
console.log('good evening');
