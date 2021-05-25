'use strict';
let score = 0 ;
score=Number(score);
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
  score++;
} else {
  alert (' Please Next trial enter yes or no only');
}

let naimAge=prompt('Do I look twenty five years old ?');
console.log(naimAge);
naimAge=naimAge.toLocaleLowerCase();
switch(naimAge){
case'yes':
  alert('yes I am 25');
  score ++;
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
  alert('I have BMW 3 series I really love it ');
  score ++;
} else if (myCar==='no'||myCar==='n'){
  alert('Bad to hear that Welcome to my site anyway');
} else {
  alert('Your answer should be yes or no');
}
let naimTravel= prompt('Do you like traveling?');
console.log(naimTravel);
naimTravel=naimTravel.toLocaleLowerCase();
if(naimTravel==='yes' || naimTravel==='y'){
  alert('I like traveling around the wrold');
  score ++ ;
} else if (naimTravel==='no' || naimTravel==='n'){
  alert('Life is silly without traveling!!');
} else {
  alert('Please only yes or no');
}

let developer=prompt('Do you think I can be a developer?');
console.log(developer);
developer=developer.toLocaleLowerCase();
switch(developer){
case 'yes':
  alert('yes I will be a developer by working and positive energy');
  score ++;
  break;
case 'no' :
  alert('Do not make me frustrated');
  break;
default :
  alert('Do not make me frustrated');
  break ;
}

let num =prompt(' Guess A Number Please from 1-6');
num=Number(num);
for (let x=1; x<=4 ;x++) {
  if (num===4){
    alert('correct');
    score++;
    break;
  } else if (num<4) {
    alert ('Too Low');
    num=prompt('guess the number again');
  } else if (num>4) {
    alert('Too High');
    num=prompt('enter the number agian');
  } else {
    alert('The Answer is 4 ');
  } }

let City=prompt('In which governorate in Jordan does Naeem live?');
City=City.toLocaleLowerCase();
let arrCity1=['amman','irbed','almafraq','aqaba','al-zarqa','al-karak'];
let o=0;
while(o !== 6) {
  /*City=prompt('In which governorate in Jordan does Naeem live?');
  alert('No wrong governorate');*/
  if (City=== arrCity1[1]){
    alert('Right choice');
    score ++;
    break;
  }else if (City !== arrCity1[1]){
    City=prompt('Wrong try another governorate please');
    o++;
  }
}
alert (UserName + 'Your score is ' + score );
