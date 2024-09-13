 
function rev(str){
  let reversed = '';
  for(let i =str.length-1; i>=0;i--){
    reversed +=str[i];
  }
  return reversed;
}

let abc = 'Dawood';
console.log(abc);

console.log(rev(abc));


// count Vowels 
function count(names){

  let count = 0;
const vowels = 'aeiou';

  
    for (let i = 0 ; i<names.length; i++){
      if (vowels.includes(names[i].toLowerCase())){
        count ++;
      }    
    }

  return count;
  }

  let abcd = 'Dawood';
  console.log(count(abcd));
  
// console.log(names);

function upper(word){

  let uppercase = '';

  for (let i = 0; i<word.length; i++){
    uppercase += word[i].toUpperCase();
  }

  return uppercase;
}

let def = 'Dawood';
console.log(upper(def));
