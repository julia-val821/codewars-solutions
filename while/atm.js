//https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript

function solve(n) {
  let count = 0;
  while(n >= 500){
    n-=500;
    count++;
  }
  while(n >= 200){
    n-=200;
    count++;
  }
  while(n >= 100){
    n-=100;
    count++;
  }
  while(n >= 50){
    n-=50;
    count++;
  }
  while(n >= 20){
    n-=20;
    count++;
  }
  while(n >= 10){
    n-=10;
    count++;
  }
  return (n === 0) ? count : -1;
}