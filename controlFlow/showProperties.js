const movie = {
    title:'a',
    releasYear:2019,
    rating:3.4,
    director:'sk'
};
showProperties(movie);

function showProperties(obj){
    for(let key in obj)
    if(typeof obj[key] ==='string')
    console.log(key, obj[key]);
    
}