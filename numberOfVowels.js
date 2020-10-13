
const numberOfVowels = function(data) {
let occ=0;
for (let i =0 ; i< data.length; i++){
switch (data[i].toUpperCase()){
case 'A':
case 'E':
case 'I':
case 'O':
case 'U': occ++;
          break;
          }
}
 return occ;
  // Put your solution here
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
