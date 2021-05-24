'use strict';
let UserName=prompt('whats your name?');
console.log(UserName);
let PlaceofBirth=prompt('Do you think Naim was born in Jordan?');
console.log(PlaceofBirth);
PlaceofBirth=PlaceofBirth.toLocaleLowerCase();
if(PlaceofBirth === 'yes' || PlaceofBirth ==='y') {
alert('No I was born in Abudahbi ');
} else if(PlaceofBirth === 'no'|| PlaceofBirth ==='n'){
console.log('I was born in Abudahbi');
alert('I was born in Abudahbi');
} else {
alert (' Please Next trial enter yes or no only');
}
let