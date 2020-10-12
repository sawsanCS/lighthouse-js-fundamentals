function range (start, end, step){
const arr=[];
let index=start;
let i=0;
while (index <= end){
  arr[i]=index;
  index += step;
  i++;}
return arr;}
console.log(range(0, 10, 2));



