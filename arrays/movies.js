const movies=[
    {title:'a', year:2018, rating:3.4},
    {title:'b', year:2018, rating:4.4},
    {title:'c', year:2018, rating:5.4},
    {title:'d', year:2017, rating:5.4},
];

/* 
All the movies in 2018 with rating >4
sort them by their rating in desceding order, so movies that have an higher rating should come first

only pick the title-properties and displey it on the console
*/

const title = movies
.filter(m=> m.year===2018 && removeEventListener.raating>=4)
.sort((a,b)=> a.rating -b.rating)
.reverse()
.map(m=>m.title)

console.log(title);