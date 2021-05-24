'use strict';
let UserName=prompt('Hello, whats your name?');
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

let naimAge=prompt('Do I look twenty five years old ?');
console.log(naimAge);
naimAge=naimAge.toLocaleLowerCase();
switch(naimAge){
case'yes':
alert('yes I am 25');
break;
case 'no':
alert('Do not increase or decrease my age. I am 25 years old');
break;
default:
alert('Your answer should be yes or no only');
break;
}
let myCar=prompt('Do you like cars ?');
console.log(myCar);
myCar=myCar.toLocaleLowerCase();
if(myCar==='yes' || myCar==='y'){
alert('I have BMW I really love it ');
} else if (myCar==='no'||myCar==='n'){
alert('Bad to hear that Welcome to my site anyway');
} else {
alert('Your answer should be yes or no');
}