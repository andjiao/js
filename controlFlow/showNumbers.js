showNumbers(12);

function showNumbers(limit){
    for(i=0; i<=limit;i++){
        /*if(i%2==0) console.log(i, 'even');
        else console.log('odd');*/

        const message = (i%2==0)? 'even':'odd';
        console.log(i,message);
    }
}