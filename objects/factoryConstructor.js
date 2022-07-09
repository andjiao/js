

//let address= createAddress('a','b,','c');
//console.log(address)

let address= new Address('a','b','c')
console.log(address)

//Facory funtion
function createAddress(street,city,zipcode){
    return{
        //if key and value are the same, we can drop the value
        street,
        city,
        zipcode
    }
}

//Constructor function
function Address(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}