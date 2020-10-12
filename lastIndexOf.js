function lastIndexOf( myarr, num){
let index_last= myarr.length; 
let find= false;
while (index_last>=0 && find ===false){
 if (myarr[index_last]===num){
   find= true;}
else 
    index_last--;
}
return index_last;
}
const arr = [ 0, 1, 4, 1, 2 ];
console.log(lastIndexOf( arr, 1));


