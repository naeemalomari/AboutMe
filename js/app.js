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
let naimAge=prompt('Do I look twenty five years old ?');
naimAge=naimAge.toLocaleLowerCase();
switch(naimAge){
case'yes':
alert('yes I am 25');
break;
case 'no':
alert('do not increase or decrease my age. I am 25 years old');
break;
default:
alert('your answer should be yes or no only');
break;
}