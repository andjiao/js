const output =fizzBuzz(5);
console.log(output);

function fizzBuzz(input){
    if(typeof input !=='number')
    return NaN; //'not a number';

    if((input%3===0) && (input%5===0))
    return 'FizzBuzz';

    if(input%3===0)
    return 'fizz';

    if(input%5===0)
    return 'buzz';

    

    return input;
}