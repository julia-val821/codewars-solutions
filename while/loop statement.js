//https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(str,n){
  while(n > 0){
    str = '*' + str;
    n--;
    if(n > 0){
      str = str + '*';
      n--;
    }
  }
  return str;
}