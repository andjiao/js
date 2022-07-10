const numbers =[1,2,3,4];

const max =getMax(numbers);

console.log(max);

function getMax(array){
    if(array.length ===0) return undefined;

    return array.reduce((accumulator, current)=>(current> accumulator)? current: accumulator)

     /* 
        if(current>accumulator) return current;
        return accumulator;
        */
        

    
    /*let max= array[0];
    for(let i=1; i<array.length;i++)
    if(array[i]>max)
    max=array[i];
    return max;*/
}