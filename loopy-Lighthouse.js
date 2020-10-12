function loopyLighthouse(range, multiples, words){

for (let i=range[0]; i<range[1]; i++){

  if (i%(multiples[0]*multiples[1]) === 0){
    console.log(words[0]+words[1]+"\n");
  }
  else if(i%multiples[0] === 0){
    console.log(words[0]+"\n");
  }
  else if (i%multiples[1] === 0){
    console.log(words[1]+"\n");
  }
  else{
    console.log(i+"\n");
  }
  
}
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

