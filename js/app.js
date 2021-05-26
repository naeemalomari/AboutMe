'use strict';
let score = 0 ;
score=Number(score);
let UserName=prompt('Hello, whats your name?');
// console.log(UserName);
alert('Hello ' + UserName)
function Ques1(){
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
return(PlaceofBirth);
}
Ques1();

let naimAge=prompt('Do I look twenty five years old ?');
naimAge=naimAge.toLocaleLowerCase();

function Ques2(naimAge){
console.log(naimAge);
switch(naimAge){
case'yes':
case'y':
  alert('yes I am 25');
  score++;
  break;
case 'no':
case'n':
  alert('Do not increase or decrease my age. I am 25 years old');
  break;
default:
  alert('Your answer should be yes or no only');
  break;
}
}
Ques2(naimAge)

function Ques3(){
let myCar=prompt('Do you like cars ?');
console.log(myCar);
myCar=myCar.toLocaleLowerCase();
if(myCar==='yes' || myCar==='y'){
  alert('I have BMW 3 series I really love it ');
  score++;
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
  score++;
} else if (naimTravel==='no' || naimTravel==='n'){
  alert('Life is silly without traveling!!');
} else {
  alert('Please only yes or no');
}
return(naimTravel)
}
Ques3()


let developer=prompt('Do you think I can be a developer?');
console.log(developer);
developer=developer.toLocaleLowerCase();
function Ques4(){
switch(developer){
case 'yes':
case 'y':
  alert('yes I will be a developer by working and positive energy');
  score++;
  break;
case 'no' :
case 'n':
  alert('Do not make me frustrated');
  break;
default :
  alert('Do not make me frustrated');
  break ;
}
}
Ques4()
let num =prompt(' Guess A Number Please from 1-6');
num=Number(num);
function Ques5(num){

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
    // i=10;
    break;
  } } 
  
}
Ques5(num)

// let City=prompt('In which governorate in Jordan does Naeem live?');
// City=City.toLocaleLowerCase();
// let arrCity1=['amman','irbed','almafraq','aqaba','al-zarqa','al-karak'];
// let o=0;
// while(o !== 6) {
//   /*City=prompt('In which governorate in Jordan does Naeem live?');
//   alert('No wrong governorate');*/
//   if (City=== arrCity1[1]){
//     alert('Right choice');
//     score ++;
//     break;
//   }else if (City !== arrCity1[1]){
//     City=prompt('Wrong try another governorate please');
//     o++;
//   }
// }


function Ques6(){
let arrCity1=[ 'amman' , 'irbed','almafraq','aqaba','al-zarqa','al-karak']

for ( let first = 0 ; first < 6 ; first++ ){
  let City=prompt('In which governorate in Jordan does Naeem live?');
  City=City.toLowerCase();

  for ( let sec = 0 ; sec < arrCity1.length ; sec++ ){
    console.log(arrCity1[sec])

    if (City === arrCity1[sec]){
      alert('You Are good in guessing')
      console.log(score + City);
      score++;
      
      first = 10;
    }
  
  }

}
}
Ques6();
alert (UserName + 'Your score is ' + score );
